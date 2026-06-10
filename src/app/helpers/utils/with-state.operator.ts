import { Observable, of, merge, interval, concat } from 'rxjs';
import { map, catchError, shareReplay, take, takeUntil, startWith } from 'rxjs/operators';

// Interfaces
import { DataState, IErrResp, IRequestStateConfig, LOADING_MESSAGES } from '@interfaces/index';

// --- MAIN ---
export const withRequestState = <T>({ obs$, errH, changingLoading = false, timeToChangeWord = 1500, loadingMsg }: IRequestStateConfig<T>): Observable<DataState<T>> => {
  return changingLoading ? createChangingLoadingState(obs$, errH, timeToChangeWord, loadingMsg) : createSimpleState(obs$, errH, loadingMsg);
};

// --- SIMPLE STATE ---
const createSimpleState = <T>(obs$: Observable<T>, errH?: { handle: (err: unknown) => IErrResp }, loadingMsg?: string[]): Observable<DataState<T>> => {
  const msg = loadingMsg?.[0] ?? LOADING_MESSAGES[0];
  return obs$.pipe(
    map(successState),
    catchError((err) => of(errorState<T>(errH ? errH.handle(err) : normalizeError(err)))),
    startWith(loadingState<T>(msg))
  );
};

// --- CHANGING LOADING STATE ---
const createChangingLoadingState = <T>(
  obs$: Observable<T>,
  errH?: { handle: (err: unknown) => IErrResp },
  timeToChangeWord: number = 1500,
  loadingMsg?: string[]
): Observable<DataState<T>> => {
  const messages = loadingMsg?.length ? [...loadingMsg] : [...LOADING_MESSAGES];

  const request$ = obs$.pipe(
    map(successState),
    catchError((err) => of(errorState<T>(errH ? errH.handle(err) : normalizeError(err)))),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  // stream de loading que emite un mensaje cada timeToChangeWord
  const loading$ = concat(
    of(loadingState<T>(messages[0])), // primer mensaje inmediatamente
    interval(timeToChangeWord).pipe(
      take(messages.length - 1), // el resto de los mensajes
      map((i) => loadingState<T>(messages[i + 1])),
      takeUntil(request$)
    )
  );

  return merge(loading$, request$);
};

// --- FACTORIES ---
const loadingState = <T>(loadingMsg: string): DataState<T> => ({
  data: null,
  status: 'loading',
  error: null,
  loadingMsg,
});

const successState = <T>(data: T): DataState<T> => ({
  data,
  status: 'success',
  error: null,
});

const errorState = <T>(error: IErrResp): DataState<T> => ({
  data: null,
  status: 'error',
  error,
});

// --- ERROR NORMALIZER ---
const normalizeError = (err: unknown): IErrResp => {
  if (err && typeof err === 'object' && 'message' in err) {
    return { message: (err as any).message, status: (err as any).status };
  }
  return { message: 'Unknown error' };
};
