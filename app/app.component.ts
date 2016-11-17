import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <header>
      <h1>{{title}}</h1>
      <a *ngIf="authService.isLoggedIn()" class="hamburger" href="#" (click)="toggleNav()">Nav</a>
      <div class="header-bar"></div>
    </header>
    <nav (click)="toggleNav()">
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/my-account" routerLinkActive="active">My Account</a>
      <a href="#" (click)="authService.logout()">Sign Out</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService) {

  }

  title = 'My Super Cool Moving App';

  toggleNav() {
    document.querySelector('nav').classList.toggle('open');
    return false;
  }
}
