import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tf-otp-input',
  templateUrl: './tf-otp-input.component.html',
  styleUrls: ['./tf-otp-input.component.scss'],
})
export class TfOtpInputComponent implements OnInit {
  @Input() isPhoneValid: boolean;
  @Output() login: EventEmitter<number> = new EventEmitter();
  @Output() resendOtp: EventEmitter<null> = new EventEmitter();

  @ViewChildren('otpInput', { read: ElementRef }) otpInputs: QueryList<ElementRef>;
  otpForm: FormGroup;
  resetOtp = true;

  constructor() {}

  get otp() {
    return this.otpForm.get('otp') as FormArray;
  }

  ngOnInit(): void {
    const otpFormControl: FormControl[] = [1, 2, 3, 4].map((val) => {
      return new FormControl('', [Validators.required, Validators.maxLength(1)]);
    });
    this.otpForm = new FormGroup({
      otp: new FormArray(otpFormControl),
    });
  }

  onOtpInput(event, index) {
    if (this.otpForm.invalid) {
      if (event.key !== 'Backspace' && index !== this.otpInputs.length - 1) {
        this.otpInputs.find((item, pos) => pos === index + 1).nativeElement.focus();
      }
    } else {
      this.login.emit(this.otp.value.join(''));
    }
  }

  onResendOtp() {
    this.resendOtp.emit(null);
  }

  onFocus($event: FocusEvent) {
    if (this.resetOtp) {
      this.otpForm.reset();
      this.otpInputs.first.nativeElement.focus();
      this.resetOtp = false;
    }
  }
}
