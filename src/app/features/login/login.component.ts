import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isOtpSent: boolean;
  showLoadingOverlay = false;

  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    });

  }

  onSubmit() {
    console.log(this.loginForm);
    this.showLoadingOverlay = true;
    setTimeout(() => {
      this.showLoadingOverlay = false;
      this.isOtpSent = true;
    }, 1);

  }

  onSubmitOtp(data: number) {
    console.log(data);
    console.log('fire to backend');
  }
}

