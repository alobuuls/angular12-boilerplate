import { Observable } from 'rxjs';

// --- Interfaces & Constants ---
export const LOADING_MESSAGES = ['Loading', 'Getting data', 'We are about to finish this', 'Almost there', 'Just one second more'] as const;

export interface IErrResp {
  message: string;
  status?: number;
}

export type DataState<T> =
  | { status: 'loading'; data: null; error: null; loadingMsg: string }
  | { status: 'success'; data: T; error: null }
  | { status: 'error'; data: null; error: IErrResp };

// --- Config for helper ---
export interface IRequestStateConfig<T> {
  obs$: Observable<T>;
  errH?: { handle: (err: unknown) => IErrResp };
  changingLoading?: boolean;
  timeToChangeWord?: number;
  loadingMsg?: string[];
}
