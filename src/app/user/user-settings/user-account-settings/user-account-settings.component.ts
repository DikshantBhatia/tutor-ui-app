import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../../services/user.service';
import { take, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { transcode } from 'buffer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-account-settings',
  templateUrl: './user-account-settings.component.html',
  styleUrls: ['./user-account-settings.component.scss'],
})
export class UserAccountSettingsComponent implements OnInit {
  error: any;
  user: Observable<User>;
  phoneNumber: string;
  email: string;

  phoneEditable: boolean = false;
  showPhoneLoadingOverlay: boolean = false;
  phoneOtpGenerated: boolean = false;
  phoneOtp: string;

  //email related

  emailEditable: boolean = false;
  showEmailLoadingOverlay: boolean = false;
  emailOtpGenerated: boolean = false;
  emailOtp: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ng on init');
    this.user = this.authService.user.pipe(
      take(1),
      tap((userResp) => {
        this.phoneNumber = userResp.phoneNumber;
        this.email = userResp.email;
        console.log(this.phoneNumber);
        console.log(this.user);
      })
    );
    this.user.subscribe((user) => console.log(user));
    console.log('phone' + this.phoneNumber);
  }

  //Separate method if submit button is needed on UI
  changePhone() {
    //call userService method to change phone
    console.log('change phone called');
    this.showPhoneLoadingOverlay = true;
    this.userService.changePhone({ phoneNumber: this.phoneNumber, password: this.phoneOtp }).subscribe(
      (response) => {
        this.showPhoneLoadingOverlay = false;
        this.phoneOtpGenerated = false;
        this.phoneEditable = false;
        this.error = '';
      },
      (errorResponse) => {
        this.showPhoneLoadingOverlay = false;
        this.error = errorResponse;
      }
    );
  }

  resetPhoneOtp() {
    console.log('reset phone otp called');
    this.phoneOtp = null;
    this.phoneOtpGenerated = false;
  }

  getPhoneOtp(otp: string) {
    this.phoneOtp = otp;
    console.log('otp retrieved');

    this.changePhone();
  }

  onSendPhoneOtp() {
    console.log('otp generated');

    this.showPhoneLoadingOverlay = true;

    this.userService.phoneOtp({ phoneNumber: this.phoneNumber }).subscribe(
      (response) => {
        this.showPhoneLoadingOverlay = false;
        this.phoneOtpGenerated = true;
        this.error = '';
      },
      (errResp) => {
        this.showPhoneLoadingOverlay = false;
        this.phoneOtpGenerated = false;
        this.error = errResp;
      }
    );
  }

  //Email related
  resetEmailOtp() {
    console.log('reset phone otp called');
    this.emailOtp = null;
    this.emailOtpGenerated = false;
  }

  getEmailOtp(otp: string) {
    this.phoneOtp = otp;
    console.log('otp retrieved');

    this.changeEmail();
  }

  onSendEmailOtp() {
    console.log('email otp generated');

    this.showEmailLoadingOverlay = true;

    this.userService.emailOtp({ email: this.email }).subscribe(
      (response) => {
        this.showEmailLoadingOverlay = false;
        this.emailOtpGenerated = true;
        this.error = '';
      },
      (errResp) => {
        this.showEmailLoadingOverlay = false;
        this.emailOtpGenerated = false;
        this.error = errResp;
      }
    );
  }

  //Separate method if submit button is needed on UI
  changeEmail() {
    //call userService method to change phone
    console.log('change phone called');
    this.showEmailLoadingOverlay = true;
    this.userService.changeEmail({ email: this.email, password: this.phoneOtp }).subscribe(
      (response) => {
        this.showEmailLoadingOverlay = false;
        this.emailOtpGenerated = false;
        this.emailEditable = false;
        this.error = '';
      },
      (errorResponse) => {
        this.showEmailLoadingOverlay = false;
        this.error = errorResponse;
      }
    );
  }

  deleteUser() {
    console.log('delete user called');
    this.userService.deleteUser().subscribe(
      (response) => {
        console.log('user deleted successfully');
        this.error = '';
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        this.router.navigate([returnUrl]);
      },
      (errorResponse) => {
        this.error = errorResponse;
      }
    );
  }
}
