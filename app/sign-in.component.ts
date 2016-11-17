import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {

  }

  doSignIn(): void {
    let link = ['/', 'dashboard'];
    this.router.navigate(link);
  }
}
