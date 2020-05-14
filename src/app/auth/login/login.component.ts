import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {TfOtpInputComponent} from '../../shared/components/tf-otp-input/tf-otp-input.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  otpGenerated: boolean;
  showLoadingOverlay = false;
  error;

  @ViewChild(TfOtpInputComponent)  otpInputComponent;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      phoneNumber: new FormControl('', [Validators.required]),
    });
  }

  onSendOtp() {
    this.showLoadingOverlay = true;
    this.authService.sendOtp(this.loginForm.value)
      .subscribe(
        response => {
          this.showLoadingOverlay = false;
          this.otpGenerated = true;
          this.error = '';
        },
        errResp => {
          this.showLoadingOverlay = false;
          this.otpGenerated = false;
          this.error = errResp;
          // this.messageService.add({severity: 'error', detail: errResp, life : 10000});
        });
  }

  onLogin(otp: number) {
    this.showLoadingOverlay = true;
    this.authService.login(this.loginForm.value.phoneNumber, otp)
      .subscribe(
        response => {
          this.showLoadingOverlay = false;
          this.router.navigate(['/home']);
        },
        errResp => {
          this.showLoadingOverlay = false;
          this.error = errResp;
          this.otpInputComponent.resetOtp = true;
        });

  }
}

