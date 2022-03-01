import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  Observable,
  startWith,
} from 'rxjs';

@Injectable()
export class SizeDetectorService {
  private resizeSubject: BehaviorSubject<SCREEN_SIZE>;

  constructor() {
    this.resizeSubject = new BehaviorSubject<SCREEN_SIZE>(SCREEN_SIZE.XL);
  }

  onResize(size: SCREEN_SIZE) {
    this.resizeSubject.next(size);
  }

  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject
      .asObservable()
      .pipe(distinctUntilChanged(), startWith(this.resizeSubject.getValue()));
  }
}

export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL,
}
