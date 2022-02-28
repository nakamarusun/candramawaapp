import { Injectable } from '@angular/core';
import { distinctUntilChanged, Observable, startWith, Subject } from 'rxjs';

@Injectable()
export class SizeDetectorService {
  private resizeSubject: Subject<SCREEN_SIZE>;
  private curSize = SCREEN_SIZE.XL;

  constructor() {
    this.resizeSubject = new Subject();
    this.resizeSubject
      .asObservable()
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        this.curSize = size;
      });
  }

  onResize(size: SCREEN_SIZE) {
    this.resizeSubject.next(size);
  }

  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject
      .asObservable()
      .pipe(distinctUntilChanged(), startWith(this.curSize));
  }
}

export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL,
}
