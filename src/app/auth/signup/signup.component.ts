import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import PlaceResult = google.maps.places.PlaceResult;
import { CreateTutorProfileService } from '../../create-tutor-profile/create-tutor-profile.service';
import { User } from '../../core/models/user.model';
import { GoogleAddressType } from '../../shared/models/types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('otpModal') otpModalTemplate;
  signUpForm: FormGroup;
  submitted = false;
  loading = false;
  loadingOtpModal = false;
  isTutorSingup = false;
  selectedCity: PlaceResult;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private createTutorProfileService: CreateTutorProfileService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        googlePlaceId: ['', Validators.required],
        description: ['', Validators.required],
        type: 'CITY'
      }),
      phoneNumber: ['', Validators.required],
      password: [''],
    });

    if (this.route.snapshot.routeConfig.path === 'register/tutor') {
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
    this.selectedCity = place;
    this.signUpForm.patchValue({
      address:  {
         description : place.formatted_address,
         googlePlaceId: place.place_id
      }
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
        (response: any) => {
          this.loadingOtpModal = false;
          this.error = '';
          this.modalService.dismissAll();
          let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
          if (this.isTutorSingup) {
            if (!response.user.profileCreated) {
                this.createTutorProfileService.setCurrentStep(1);
                returnUrl = 'create-profile/basic-details';
            }
          }

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

  ngAfterViewInit(): void {
    document.querySelector('body').classList.add('bg-signup');
  }

  ngOnDestroy(): void {
    document.querySelector('body').classList.remove('bg-signup');
  }

  checkPlace() {
    if (this.selectedCity && this.selectedCity.formatted_address !== this.f.address.value.description) {
      this.signUpForm.patchValue({
        address: {
          googlePlaceId: '',
          description: '',
        },
      });
    }
  }
}
