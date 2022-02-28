import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { SCREEN_SIZE, SizeDetectorService } from './size-detector.service';

// Thanks to
// https://www.digitalocean.com/community/tutorials/detect-responsive-screen-sizes-in-angular

@Component({
  selector: 'size-detector',
  template: `
    <div class="position-absolute top-0 w-100">
      <div
        *ngFor="let s of sizes"
        class="{{ s.css }}"
        attr.data-ssize="{{ s.id }}"
      >
        {{ s.name }}
      </div>
    </div>
  `,
  styles: ['div {z-index: -100;}'],
})
export class SizeDetectorComponent implements AfterViewInit {
  sizes = [
    {
      id: SCREEN_SIZE.XS,
      name: 'xs',
      css: `d-block d-sm-none`,
    },
    {
      id: SCREEN_SIZE.SM,
      name: 'sm',
      css: `d-none d-sm-block d-md-none`,
    },
    {
      id: SCREEN_SIZE.MD,
      name: 'md',
      css: `d-none d-md-block d-lg-none`,
    },
    {
      id: SCREEN_SIZE.LG,
      name: 'lg',
      css: `d-none d-lg-block d-xl-none`,
    },
    {
      id: SCREEN_SIZE.XL,
      name: 'xl',
      css: `d-none d-xl-block`,
    },
  ];

  // Here, have the elementRef and resizeService injected
  constructor(
    private eref: ElementRef,
    private resizeSvc: SizeDetectorService
  ) {}

  private detectScreenSize() {
    for (let el of this.eref.nativeElement.firstChild.children) {
      if (window.getComputedStyle(el).display !== 'none') {
        const curSize = el.getAttribute('data-ssize');
        this.resizeSvc.onResize(parseInt(curSize, 10));
      }
    }
  }

  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }
}
