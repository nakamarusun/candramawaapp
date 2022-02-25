import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuroutingComponent } from './menurouting.component';

describe('MenuroutingComponent', () => {
  let component: MenuroutingComponent;
  let fixture: ComponentFixture<MenuroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuroutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
