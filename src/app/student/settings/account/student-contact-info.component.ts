import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-contact-info',
  templateUrl: './student-contact-info.component.html',
  styleUrls: ['./student-contact-info.component.scss'],
})
export class StudentContactInfoComponent implements OnInit,OnDestroy {
  error: any;
  phoneNumber: string;
  email: string;

  phoneEditable = false;
  sendingOtpToPhone = false;
  phoneOtpGenerated = false;

  // email related
  emailEditable = false;
  sendingOtpToEmail = false;
  emailOtpGenerated = false;

  @ViewChild("phoneOtpInput") phoneOtpInputComponent;
  @ViewChild("emailOtpInput") emailOtpInputComponent;

  private userSub: Subscription;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ng on init');
    this.userSub = this.authService.userSubject.subscribe( userResp => {
        this.phoneNumber = userResp.phoneNumber;
        this.email = userResp.email;
      })
  }

  onSendPhoneOtp(phone) {
    console.log('otp generated');
    this.sendingOtpToPhone = true;

    this.userService.phoneOtp({ phoneNumber: phone }).subscribe(
      (response) => {
        this.phoneNumber = phone;
        this.sendingOtpToPhone = false;
        this.phoneOtpGenerated = true;
        this.error = '';
      },
      (errResp) => {
        this.sendingOtpToPhone = false;
        this.phoneOtpGenerated = false;
        this.error = errResp;
      }
    );
  }


  // Separate method will be created if submit button is needed on UI
  updatePhone(otp: string) {
    // call userService method to change phone
    console.log('change phone called');
    // this.sendingOtpToPhone = true;
    this.userService.changePhone({ phoneNumber: this.phoneNumber, password: otp }).subscribe(
      (response) => {
        this.phoneOtpGenerated = false;
        this.phoneEditable = false;
        this.error = '';
      },
      (errorResponse) => {
        this.sendingOtpToPhone = false;
        this.error = errorResponse;
        this.phoneOtpInputComponent.resetOtp = true;
      }
    );
  }


  onSendEmailOtp(emailAddress : string) {
    console.log('email otp generated');
    this.sendingOtpToEmail = true;

    this.userService.emailOtp({ email: emailAddress }).subscribe(
      (response) => {
        this.email = emailAddress;
        this.sendingOtpToEmail = false;
        this.emailOtpGenerated = true;
        this.error = '';
      },
      (errResp) => {
        this.sendingOtpToEmail = false;
        this.emailOtpGenerated = false;
        this.error = errResp;
      }
    );
  }

  // Separate method  will be create if submit button is needed on UI
  updateEmail(otp: string) {
    // call userService method to change phone
    console.log('change email called');
    this.userService.changeEmail({ email: this.email, password: otp }).subscribe(
      (response) => {
        this.emailOtpGenerated = false;
        this.emailEditable = false;
        this.error = '';
      },
      (errorResponse) => {
        this.error = errorResponse;
        this.emailOtpInputComponent.resetOtp = true;
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

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
