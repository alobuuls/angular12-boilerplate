import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // HttpRequest es inmutable → hay que clonarlo para modificarlo
    const cloneReq = req.clone({

      // Agrega headers a TODAS las peticiones HTTP
      setHeaders: {
        'Content-Type': 'application/json', // indica formato del body (útil en POST/PUT)
        'Accept': 'application/json' // indica que esperamos JSON como respuesta
      }
    });

    // Continúa la cadena de interceptores enviando la request modificada
    return next.handle(cloneReq);
  }

}
