import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Services
import { ShareDataService } from '@services/share-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectedRouteGuard implements CanActivate {

  constructor(private router: Router, private _shareData: ShareDataService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    return this._shareData.getAdminStatus().pipe(
      map(res => {
        // Si tiene permisos → permite acceso
        if (res) return true;

        // Si no tiene permisos → muestra mensaje
        alert('No tiene permisos para acceder a esta ruta');
        // Redirige a otra ruta (sin navegar manualmente)
        return this.router.createUrlTree(['/home']);
      })
    );

  }
}
