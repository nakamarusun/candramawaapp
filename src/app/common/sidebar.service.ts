import { Injectable } from '@angular/core';
import { distinctUntilChanged, Observable, startWith, Subject } from 'rxjs';

@Injectable()
export class SidebarService {
  private opened = false;
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
    return this.openedSubject
      .asObservable()
      .pipe(distinctUntilChanged(), startWith(this.opened));
  }
}
