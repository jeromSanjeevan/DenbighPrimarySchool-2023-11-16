import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdmissionComponent } from './school-admission.component';

describe('SchoolAdmissionComponent', () => {
  let component: SchoolAdmissionComponent;
  let fixture: ComponentFixture<SchoolAdmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolAdmissionComponent]
    });
    fixture = TestBed.createComponent(SchoolAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
