import { Component, OnInit } from '@angular/core';
import { menus } from '../menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menus = menus;

  constructor() { }

  ngOnInit(): void {
  }
}
