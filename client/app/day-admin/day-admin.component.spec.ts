import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAdminComponent } from './day-admin.component';

describe('DayAdminComponent', () => {
  let component: DayAdminComponent;
  let fixture: ComponentFixture<DayAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
