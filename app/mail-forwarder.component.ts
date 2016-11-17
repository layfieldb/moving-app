import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'mail-forwarder',
  templateUrl: 'mail-forwarder.component.html',
  styleUrls: ['mail-forwarder.component.css']
})
export class MailForwarderComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {

  }
}
