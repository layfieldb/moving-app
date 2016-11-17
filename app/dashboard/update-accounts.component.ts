import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'update-accounts',
  templateUrl: 'update-accounts.component.html',
  styleUrls: ['update-accounts.component.css']
})
export class UpdateAccountsComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {

  }
}
