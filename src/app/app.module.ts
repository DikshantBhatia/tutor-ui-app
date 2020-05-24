import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './layout/header/header.component';

import {
  BlockUIModule,
  DropdownModule,
  InputTextModule,
  KeyFilterModule,
} from 'primeng';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TfOtpInputComponent } from './shared/components/tf-otp-input/tf-otp-input.component';
import { TfSpinnerComponent } from './shared/components/tf-spinner/tf-spinner.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpErrorInterceptor} from './core/interceptors/http-error.interceptor';

import {UserSettingsComponent} from './user/user-settings/user-settings.component';
import { UserBasicInfoComponent } from './user/user-settings/user-basic-info/user-basic-info.component';
import {HttpRequestInterceptor} from './core/interceptors/http-request.interceptor';
import { SignupComponent } from './auth/signup/signup.component';




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
    SignupComponent
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
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
