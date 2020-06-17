import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';

import { BlockUIModule, DropdownModule, InputTextModule, KeyFilterModule } from 'primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TfOtpInputComponent } from './shared/components/tf-otp-input/tf-otp-input.component';
import { TfSpinnerComponent } from './shared/components/tf-spinner/tf-spinner.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';

import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { UserBasicInfoComponent } from './user/user-settings/user-basic-info/user-basic-info.component';
import { HttpRequestInterceptor } from './core/interceptors/http-request.interceptor';
import { SignupComponent } from './auth/signup/signup.component';
import { GooglePlacesDirective } from './shared/directives/google-places.directive';
import { NgbNavModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { UserAccountSettingsComponent } from './user/user-settings/user-account-settings/user-account-settings.component';

import { OtherPreferncesComponent } from './user/user-preferences/other-prefernces/other-prefernces.component';
import { SubjectPreferencesComponent } from './user/user-preferences/subject-preferences/subject-preferences.component';
import { TfVerifyAccountComponent } from './shared/components/tf-verify-email/tf-verify-account.component';
import { TfStepperComponent } from './shared/components/tf-stepper/tf-stepper.component';
import { HomeTutorsComponent } from './home-tutors/home-tutors.component';
import { LoginContainerComponent } from './auth/login/login-container.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    TfOtpInputComponent,
    TfSpinnerComponent,
    UserSettingsComponent,
    UserBasicInfoComponent,
    SignupComponent,
    GooglePlacesDirective,
    UserAccountSettingsComponent,
    SubjectPreferencesComponent,
    OtherPreferncesComponent,
    TfVerifyAccountComponent,
    TfStepperComponent,
    HomeTutorsComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    InputTextModule,
    KeyFilterModule,
    ReactiveFormsModule,
    BlockUIModule,
    HttpClientModule,
    NgbTypeaheadModule,
    FormsModule,
    NgbNavModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
