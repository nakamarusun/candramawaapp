import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../common/sidebar.service';
import {
  SCREEN_SIZE,
  SizeDetectorService,
} from '../common/size-detector.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit {
  isHamVisible = false;

  constructor(
    private resizeSvc: SizeDetectorService,
    private sidebarSvc: SidebarService
  ) {
    this.resizeSvc.onResize$.subscribe((size) => {
      this.hamVisibleHandler(size);
    });
  }

  hamVisibleHandler(size: SCREEN_SIZE) {
    this.isHamVisible = size < SCREEN_SIZE.MD;
  }

  toggleSidebar() {
    this.sidebarSvc.toggleSidebar();
  }

  ngOnInit(): void {}
}
