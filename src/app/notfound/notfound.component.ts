import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
})
export class NotfoundComponent implements OnInit {
  routePath: string = '';

  constructor(private router: Router) {
    this.routePath = this.router.url;
  }

  ngOnInit(): void {}
}
