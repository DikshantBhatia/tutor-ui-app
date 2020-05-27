import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TfOtpInputComponent } from '../../shared/components/tf-otp-input/tf-otp-input.component';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  submitted = false;
  otpGenerated = false;
  showLoadingOverlay = false;
  error: any;

  @ViewChild(TfOtpInputComponent) otpInputComponent;


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      googlePlaceId: [''],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.signUpForm.controls; }

  onSignup(otp: string) {
    if (this.signUpForm.valid) {
      this.showLoadingOverlay = true;
      this.authService.signup(this.signUpForm.value).subscribe(
        response => {
          this.showLoadingOverlay = false;
          this.error = '';
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
          this.router.navigate([returnUrl]);
        }, errRsp => {
          this.showLoadingOverlay = false;
          this.error = errRsp;
        }
      );
    } else {
      return;
    }
  }

  setPassword(otp: string) {
    // this.f.password.setValue(otp);
    this.signUpForm.patchValue({
      password : otp
    });
  }

  onSendOtp() {
    this.submitted = true;
    this.showLoadingOverlay = true;
    this.authService.sendOtpForSignup({ phoneNumber: this.f.phoneNumber.value })
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
        });

  }

  updateAddress(place: PlaceResult) {
    this.signUpForm.patchValue({
      address: place.formatted_address,
      googlePlaceId: place.place_id
    });
  }

}
