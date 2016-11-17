import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { DashboardComponent } from './dashboard.component';
import { ForwardMailComponent } from './dashboard/forward-mail.component';
import { MyAccountComponent } from './my-account.component';
import { SignInComponent } from './sign-in.component';
import { UpdateAccountsComponent } from './dashboard/update-accounts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-account',
    component: MyAccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'forward-mail',
    component: ForwardMailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-accounts',
    component: UpdateAccountsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  DashboardComponent,
  ForwardMailComponent,
  MyAccountComponent,
  SignInComponent,
  UpdateAccountsComponent
];
