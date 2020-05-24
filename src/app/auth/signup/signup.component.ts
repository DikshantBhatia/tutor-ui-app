import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TfOtpInputComponent } from '../../shared/components/tf-otp-input/tf-otp-input.component';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  basicInfoForm: FormGroup;
  submitted = false;
  otpGenerated = false;
  showLoadingOverlay = false;
  error: any;
  requestJsonObject:any;

  @ViewChild(TfOtpInputComponent) otpInputComponent;


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.basicInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      zipCode: [''],
      phoneNumber: ['', Validators.required]
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.basicInfoForm.controls; }

  onSignup(otp: string) {
    this.showLoadingOverlay = true;
    this.authService.signup(this.requestJsonObject).subscribe(
      response=>{
        this.showLoadingOverlay=false;
        this.error='';
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        this.router.navigate([returnUrl]);
      },errRsp=>{
        this.showLoadingOverlay=false;
        this.error=errRsp;
      }
    );
  }

  getSignupOtp(otp:string){
    this.requestJsonObject=this.basicInfoForm.value;
    this.requestJsonObject["password"]=otp;
  }

  onSendOtp() {
    this.submitted=true;
    this.showLoadingOverlay = true;
    this.authService.sendOtpForSignup({ "phoneNumber": this.basicInfoForm.controls["phoneNumber"].value })
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
        return false;
  }

}
