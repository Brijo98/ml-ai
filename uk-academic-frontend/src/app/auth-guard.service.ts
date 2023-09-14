import { Injectable, inject, signal } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  

  authenticated = signal(true);
  
}

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // console.log('guard status: ', inject(TokenService).authenticated());
  

  return inject(AuthGuardService).authenticated()
    ? true
    : inject(Router).createUrlTree(['/login']);
}
