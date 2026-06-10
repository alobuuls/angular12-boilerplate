import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Tipos de respuesta soportados por el backend:
 * - { data: T }   → formato común de APIs
 * - { result: T } → otro formato común
 * - T             → respuesta directa sin wrapper
 */
type ApiWrapper<T> = { data: T } | { result: T } | T;

@Injectable()
export class NormalizeResponseInterceptor implements HttpInterceptor {
  /**
   * Intercepta TODAS las respuestas HTTP de la app
   * y normaliza el body antes de que llegue al servicio.
   */
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<unknown>) => {
        // Solo modificamos respuestas HTTP reales (no requests ni otros eventos)
        if (event instanceof HttpResponse) {
          const normalized = this.normalize(event.body);

          // Clonamos la respuesta con el body ya normalizado
          return event.clone({
            body: normalized,
          });
        }

        return event;
      })
    );
  }

  /**
   * Normaliza cualquier tipo de respuesta del backend
   * a un formato plano T.
   *
   * Ejemplos:
   * - { data: [...] }   → [...]
   * - { result: [...] } → [...]
   * - [...]            → [...]
   */
  private normalize<T>(body: ApiWrapper<T>): T {
    // Verifica que sea un objeto válido antes de inspeccionar propiedades
    if (this.isObject(body)) {
      // Caso API: { data: T }
      if ('data' in body) {
        return (body as { data: T }).data;
      }

      // Caso API: { result: T }
      if ('result' in body) {
        return (body as { result: T }).result;
      }
    }

    // Caso default: ya es T directamente
    return body as T;
  }

  /**
   * Type guard para asegurar que el body es un objeto
   * antes de intentar acceder a sus propiedades.
   */
  private isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
  }
}
