import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent implements OnInit {
  routePath: string = '';

  constructor(private router: Router) {
    console.log(router.url);
    this.routePath = router.url;
  }

  ngOnInit(): void {}
}
