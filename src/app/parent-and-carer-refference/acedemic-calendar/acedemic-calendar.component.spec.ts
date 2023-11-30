import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcedemicCalendarComponent } from './acedemic-calendar.component';

describe('AcedemicCalendarComponent', () => {
  let component: AcedemicCalendarComponent;
  let fixture: ComponentFixture<AcedemicCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcedemicCalendarComponent]
    });
    fixture = TestBed.createComponent(AcedemicCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
