import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../common/sidebar.service';
import {
  SCREEN_SIZE,
  SizeDetectorService,
} from '../common/size-detector.service';

@Component({
  selector: 'app-menurouting',
  templateUrl: './menurouting.component.html',
  styleUrls: ['./menurouting.component.scss'],
})
export class MenuroutingComponent implements OnInit {
  mobileMode: boolean = false;
  opened = false;

  constructor(
    private resizeSvc: SizeDetectorService,
    private sidebarSvc: SidebarService
  ) {
    this.resizeSvc.onResize$.subscribe((size) => {
      this.handleSidebar(size);
    });

    this.sidebarSvc.isOpened$.subscribe((isOpened) => {
      this.opened = isOpened;
    });
  }

  handleSidebar(size: SCREEN_SIZE) {
    this.mobileMode = size < SCREEN_SIZE.MD;
    if (!this.mobileMode) {
      this.sidebarSvc.setOpened(true);
    }
  }

  closeSidebar() {
    this.sidebarSvc.setOpened(false);
  }

  ngOnInit(): void {}
}
