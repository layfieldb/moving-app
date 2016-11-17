import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-account',
  templateUrl: 'my-account.component.html',
  styleUrls: ['my-account.component.css']
})
export class MyAccountComponent {

  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['/dashboard']);
    return false;
  }

  saveAccount() {
    window.alert("saved");
    return false;
  }

}
