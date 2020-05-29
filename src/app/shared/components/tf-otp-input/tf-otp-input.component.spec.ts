import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfOtpInputComponent } from './tf-otp-input.component';

describe('TfOtpInputComponent', () => {
  let component: TfOtpInputComponent;
  let fixture: ComponentFixture<TfOtpInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TfOtpInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfOtpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
