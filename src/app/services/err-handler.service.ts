import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IErrResp } from '../interfaces/data-structure-apis';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private readonly statusMessages: Record<number | 'DEFAULT', string> = {
    400: '⚠️ Solicitud inválida. Faltan datos o hay información incorrecta. Revisa e inténtalo de nuevo.',
    401: '🔐 Sesión no válida o expirada. Inicia sesión para continuar.',
    403: '🚫 Acceso denegado. No tienes permisos para ver este recurso.',
    404: '🔍 No encontramos lo que buscas. Verifica la URL o intenta de nuevo.',
    500: '💥 Error del servidor. Estamos trabajando en solucionarlo. Intenta más tarde.',
    502: '📡 Error de conexión, verifica tu internet.',
    DEFAULT: '❌ Ocurrió un error inesperado. Por favor, inténtalo nuevamente.',
  };

  handle(error: unknown): IErrResp {
    if (error instanceof HttpErrorResponse) {
      // 🔌 Offline / error de red
      if (error.status === 0) {
        return {
          message: this.statusMessages[502],
          status: 0,
        };
      }

      return {
        status: error.status,
        message: this.statusMessages[error.status] ?? this.statusMessages.DEFAULT,
      };
    }

    // ⚠️ Error no controlado (runtime, throw manual, etc.)
    return {
      message: this.statusMessages.DEFAULT,
    };
  }
}
