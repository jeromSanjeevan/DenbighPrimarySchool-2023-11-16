import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningBodyComponent } from './governing-body.component';

describe('GoverningBodyComponent', () => {
  let component: GoverningBodyComponent;
  let fixture: ComponentFixture<GoverningBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoverningBodyComponent]
    });
    fixture = TestBed.createComponent(GoverningBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
