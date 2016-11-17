import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardItemComponent } from './dashboard-item.component';

import { ForwardMailComponent } from './dashboard/forward-mail.component'

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardItems: [{}]

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    this.dashboardItems = [
      {
        name: 'mail-forwarder',
        title: 'Forward Mail',
        description: "File your official USPS mail forwarding form - it's 100% secure.",
        actions: [
          { label: "Let's Do it", url: 'forward-mail' }
        ]
      },
      {
        name: 'update-accounts',
        title: 'Update Your Accounts',
        description: "Update your acount related settings here.",
        actions: [
          { label: "Let's Do it", url: 'update-accounts' }
        ]
      },
    ]
  }

  gotoItem(url: string): void {
    let link = ['/', url];
    this.router.navigate(link);
  }
}
