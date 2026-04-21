import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

// Services
import { ShareDataService } from '@services/share-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectedRouteGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router, // Permite redirigir usando UrlTree (forma correcta en guards)
    private _shareData: ShareDataService // Servicio que decide si el usuario tiene permisos
  ) {}

  // Protege navegación normal (cuando ya se está dentro del router)
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkAccess();
  }

  // Protege lazy loading (evita cargar el módulo si no tiene permisos)
  canLoad(route: Route, segments: UrlSegment[]) {
    return this.checkAccess();
  }

  // Núcleo del guard: aquí se decide si entra o no
  private checkAccess(): Observable<boolean | UrlTree> {

    return this._shareData.getAdminStatus().pipe(
      take(1), // evita que el observable quede abierto (solo toma 1 valor)
      map(res => {
        // Si tiene permisos → deja pasar
        if (res) return true;

        // Si no tiene permisos → se bloquea el acceso
        alert('No tiene permisos para acceder a esta ruta');

        // Redirección segura sin usar navigate()
        return this.router.createUrlTree(['/home']);
      })

    );
  }
}
