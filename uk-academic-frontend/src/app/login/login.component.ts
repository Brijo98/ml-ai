import { Component } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(authGuard: AuthGuardService) {
    authGuard.authenticated.set(true)
  }
}
