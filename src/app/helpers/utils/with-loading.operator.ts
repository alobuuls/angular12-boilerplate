import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

export interface RequestState<T> {
  data: T | null;
  loading: boolean;
  error: any;
}

export function withRequestState<T>(obs$: Observable<T>) {
  return obs$.pipe(
    map(data => ({ data, loading: false, error: null })),
    startWith({ data: null, loading: true, error: null }),
    catchError(error => of({ data: null, loading: false, error }))
  );
}
