import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService, authGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'operations',
    loadChildren: () => import('./operations/operations.module').then((o) => o.OperationsModule)
  },
  {
    path: 'keyword-extraction',
    loadChildren: () =>
      import('./keyword-extract/keyword-extract.module').then(
        (m) => m.KeywordExtractModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
