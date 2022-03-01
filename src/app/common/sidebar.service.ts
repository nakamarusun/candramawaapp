import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

@Injectable()
export class SidebarService {
  // Behavior subjects stores the current value and initial value that gets sent
  // to subscribers when they first join
  private openedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.openedSubject = new BehaviorSubject<boolean>(false);
  }

  setOpened(isOpen: boolean) {
    this.openedSubject.next(isOpen);
  }

  toggleSidebar() {
    this.openedSubject.next(!this.openedSubject.getValue());
  }

  get isOpened$(): Observable<boolean> {
    // startsWith from rxjs ensures that when we first subscribe to this, it immediately retruens the current value
    // We don't need it cuz now we use behavior subject
    return this.openedSubject.asObservable().pipe(distinctUntilChanged());
  }
}
