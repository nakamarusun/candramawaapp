import { Injectable } from '@angular/core';
import { distinctUntilChanged, Observable, startWith, Subject } from 'rxjs';

@Injectable()
export class SidebarService {
  private opened = false;
  // TODO: Change subject type
  private openedSubject: Subject<boolean>;

  constructor() {
    this.openedSubject = new Subject();
    this.openedSubject
      .asObservable()
      .pipe(distinctUntilChanged())
      .subscribe((x) => {
        this.opened = x;
      });
  }

  setOpened(isOpen: boolean) {
    this.openedSubject.next(isOpen);
  }

  toggleSidebar() {
    this.openedSubject.next(!this.opened);
  }

  get isOpened$(): Observable<boolean> {
    // Starts with ensures that when we first subscribe to this, it immediately retruens the current value
    return this.openedSubject
      .asObservable()
      .pipe(distinctUntilChanged(), startWith(this.opened));
  }
}
