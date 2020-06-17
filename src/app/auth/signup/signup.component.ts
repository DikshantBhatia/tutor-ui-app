import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('otpModal') otpModalTemplate;
  signUpForm: FormGroup;
  submitted = false;
  loading = false;
  loadingOtpModal = false;
  isTutorSingup = false;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      googlePlaceId: [''],
      phoneNumber: ['', Validators.required],
      password: [''],
    });

    if (this.route.snapshot.routeConfig.path === 'signup/tutor') {
      this.isTutorSingup = true;
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signUpForm.controls;
  }

  getHeaderText() {
    if (this.isTutorSingup) {
      return 'Register as a Tutor';
    } else {
      return 'Register as a Student';
    }
  }

  getCityInfoText() {
    if (this.isTutorSingup) {
      return 'Your city helps students to search you by location.';
    } else {
      return 'Your city helps us finding the best tutor for you in your area.';
    }
  }

  updateAddress(place: PlaceResult) {
    this.signUpForm.patchValue({
      address: place.formatted_address,
      googlePlaceId: place.place_id,
    });
  }

  onSendOtp() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      this.loading = true;
      this.authService.sendOtpForSignup({ phoneNumber: this.f.phoneNumber.value }).subscribe(
        (response) => {
          this.loading = false;
          this.modalService.open(this.otpModalTemplate, { backdrop: 'static', windowClass: 'otp-modal-signup' });
          this.error = '';
        },
        (errResp) => {
          this.loading = false;
          this.error = errResp;
        }
      );
    } else {
      return;
    }
  }

  // below method is called only from the tf-otp-component inside the otp modal
  onResendOtp() {
    this.loadingOtpModal = true;
    this.authService.sendOtpForSignup({ phoneNumber: this.f.phoneNumber.value }).subscribe(
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

  onSignup(otp: string) {
    this.signUpForm.patchValue({
      password: otp,
    });
    if (this.signUpForm.valid) {
      this.loadingOtpModal = true;
      let signUpObservable: Observable<any>;
      if (this.isTutorSingup) {
        // observable for tutor signup
        signUpObservable = this.authService.signupTutor(this.signUpForm.value);
      } else {
        // observable for student signup
        signUpObservable = this.authService.signup(this.signUpForm.value);
      }

      signUpObservable.subscribe(
        (response) => {
          this.loadingOtpModal = false;
          this.error = '';
          this.modalService.dismissAll();
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
          this.router.navigate([returnUrl]);
        },
        (errRsp) => {
          this.loadingOtpModal = false;
          this.error = errRsp;
        }
      );
    } else {
      return;
    }
  }

}
