import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourPolicyComponent } from './behaviour-policy.component';

describe('BehaviourPolicyComponent', () => {
  let component: BehaviourPolicyComponent;
  let fixture: ComponentFixture<BehaviourPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviourPolicyComponent]
    });
    fixture = TestBed.createComponent(BehaviourPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
