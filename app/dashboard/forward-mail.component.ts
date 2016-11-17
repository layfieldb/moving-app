import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'forward-mail',
  templateUrl: 'forward-mail.component.html',
  styleUrls: ['forward-mail.component.css']
})
export class ForwardMailComponent {

  constructor(
    private router: Router) {

  }
}
