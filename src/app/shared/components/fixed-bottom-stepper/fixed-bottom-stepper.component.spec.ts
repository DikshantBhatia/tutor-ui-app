import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBottomStepperComponent } from './fixed-bottom-stepper.component';

describe('FixedBottomStepperComponent', () => {
  let component: FixedBottomStepperComponent;
  let fixture: ComponentFixture<FixedBottomStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedBottomStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedBottomStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
