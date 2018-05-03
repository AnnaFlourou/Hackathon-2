import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringAdminComponent } from './scoring-admin.component';

describe('ScoringAdminComponent', () => {
  let component: ScoringAdminComponent;
  let fixture: ComponentFixture<ScoringAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
