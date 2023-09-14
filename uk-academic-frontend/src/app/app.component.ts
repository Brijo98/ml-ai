import { Component, computed, signal } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ai-ml';
  isTokenPresent = false
  constructor(authGuard: AuthGuardService) {
    this.isTokenPresent =  authGuard.authenticated()
    console.log(this.isTokenPresent);
    
    // let token = localStorage.getItem('userToken')
    // this.isTokenPresent = (token) ? true : false
  }
}
