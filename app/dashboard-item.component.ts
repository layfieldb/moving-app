import { Component } from '@angular/core';

@Component({
  moduleId: module.id
})
export class DashboardItemComponent {
  name: string;
  title: string;
  description: string;
  actions: [{}];

  constructor() {}
}
