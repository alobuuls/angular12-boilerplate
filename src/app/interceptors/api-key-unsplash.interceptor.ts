import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyUnsplashInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Evita modificar requests que NO son de Unsplash
    // (muy importante si tienes múltiples APIs en tu app)
    if (!req.url.includes(environment.apiUnsplash)) return next.handle(req);

    const reqClone = req.clone({
      // Header de autenticación requerido por Unsplash API
      setHeaders: {
        'Authorization': `Client-ID ${environment.apiKeyUnsplash}`
      }
    });

    //Continúa la cadena con la request modificada
    return next.handle(reqClone);
  }

}
