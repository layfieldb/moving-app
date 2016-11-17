import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { MailForwarderComponent } from './mail-forwarder.component';
import { SignInComponent } from './sign-in.component';
import { UpdateAccountsComponent } from './update-accounts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'mail-forwarder',
    component: MailForwarderComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'update-accounts',
    component: UpdateAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  DashboardComponent,
  HeroesComponent,
  HeroDetailComponent,
  MailForwarderComponent,
  SignInComponent,
  UpdateAccountsComponent
];
