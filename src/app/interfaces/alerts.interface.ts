import { SweetAlertOptions } from 'sweetalert2';

type AlertIcon = 'success' | 'warning' | 'error' | 'info' | 'question';

export interface IToast {
  icon: AlertIcon;
  title: string;
  time?: number;
  stopTimer?: boolean;
}

export interface IAlert {
  title: string;
  html?: string;
  icon?: AlertIcon;
  allowClose?: boolean;
  confirmText?: string;
  cancelText?: string;
  opts?: SweetAlertOptions;
}
