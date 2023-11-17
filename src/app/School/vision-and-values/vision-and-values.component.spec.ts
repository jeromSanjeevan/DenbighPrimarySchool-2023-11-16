import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionAndValuesComponent } from './vision-and-values.component';

describe('VisionAndValuesComponent', () => {
  let component: VisionAndValuesComponent;
  let fixture: ComponentFixture<VisionAndValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionAndValuesComponent]
    });
    fixture = TestBed.createComponent(VisionAndValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
