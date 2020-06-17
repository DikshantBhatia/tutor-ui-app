import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() loginType: 'student' | 'tutor';
  @ViewChild('otpModal') otpModalTemplate;
  loginForm: FormGroup;
  error;
  loading = false;
  loadingOtpModal = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      phoneNumber: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSendOtp() {
    this.loading = true;
    this.authService.sendOtp(this.loginForm.value).subscribe(
      (response) => {
        this.loading = false;
        this.modalService.open(this.otpModalTemplate, { backdrop: 'static', windowClass: 'otp-modal-login' });
        this.error = '';
      },
      (errResp) => {
        this.loading = false;
        this.error = errResp;
      }
    );
  }

  onResendOtp() {
    this.loadingOtpModal = true;
    this.authService.sendOtp(this.loginForm.value).subscribe(
      (response) => {
        this.loadingOtpModal = false;
        this.error = '';
      },
      (errResp) => {
        this.loadingOtpModal = false;
        this.error = errResp;
      }
    );
  }

  onLogin(otp: number) {
    if (this.loginForm.valid) {

      const loginObservable =  this.loginType === 'student' ? this.authService.loginStudent(this.loginForm.value.phoneNumber, otp)
          : this.authService.loginTutor(this.loginForm.value.phoneNumber, otp);

      this.loadingOtpModal = true;

      loginObservable.subscribe(
        (response) => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
          this.loadingOtpModal = false;
          this.modalService.dismissAll();
          this.router.navigate([returnUrl]);
        },
        (errResp) => {
          this.loadingOtpModal = false;
          this.error = errResp;
        }
      );
    } else {
      this.error = 'Phone number is not correct. It must have 10 digits';
    }
  }
}
