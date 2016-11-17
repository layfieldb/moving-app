import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => localStorage.setItem('isLoggedIn', true));
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', false);
    this.router.navigate(['/sign-in']);
    return false;
  }
}
