import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from './core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private athService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// Aqui se pide que devuelva el observable de si tiene un usuario "hasUser".
// con el pipe se quiere que el valor del usuario lo transforme.
    return this.athService.hasUser().pipe(
      map(user => user === null ? false : true),
// si usuario es nulo no lo dejara entar si no entrara.
// el "tap" ya llega transformado, y si no existe nungun usuario lo redirecciona.
// "tap" nos deja hacer una accion como un console.log pero tambien enviarlo a algun lugar.
      tap(hasUser => {
        if (!hasUser) {
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }
}
