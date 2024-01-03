import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearOneComponent } from './year-one.component';

describe('YearOneComponent', () => {
  let component: YearOneComponent;
  let fixture: ComponentFixture<YearOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearOneComponent]
    });
    fixture = TestBed.createComponent(YearOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
