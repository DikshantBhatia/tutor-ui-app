import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './layout/header/header.component';
import {HomeComponent} from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import {BlockUIModule, DropdownModule, InputTextModule, KeyFilterModule, TooltipModule} from 'primeng';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TfOtpInputComponent } from './shared/components/tf-otp-input/tf-otp-input.component';
import { TfSpinnerComponent } from './shared/components/tf-spinner/tf-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    TfOtpInputComponent,
    TfSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    KeyFilterModule,
    ReactiveFormsModule,
    BlockUIModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
