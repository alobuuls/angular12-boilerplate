import { Injectable } from '@angular/core';

// Interfaces
import { IAlert, IToast } from '@interfaces/alerts.interface';

// External Libraries
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  showToast({ icon, title, time = 3500, stopTimer = true }: IToast) {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      timer: time,
      timerProgressBar: true,
      showConfirmButton: false,

      didOpen: toast => {
        if (!stopTimer) return;
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    }).fire({
      icon,
      title,
    });
  }

  showAlert({ title, html, icon, allowClose = true, confirmText = 'Guardar', cancelText = 'Cerrar', opts }: IAlert) {
    return Swal.fire({
      title,
      html,
      icon,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      allowEscapeKey: allowClose,
      allowOutsideClick: allowClose,
      reverseButtons: true,
      ...opts,
    });
  }
}
