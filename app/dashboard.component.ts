import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardItems: []

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
          { label: "Let's Do it", url: 'mail-forwarder' }
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

  gotoItem(url): void {
    let link = ['/', url];
    this.router.navigate(link);
  }
}
