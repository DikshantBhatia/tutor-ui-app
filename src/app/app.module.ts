import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropdownModule, InputTextModule, KeyFilterModule } from 'primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';

import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { UserBasicInfoComponent } from './user/user-settings/user-basic-info/user-basic-info.component';
import { HttpRequestInterceptor } from './core/interceptors/http-request.interceptor';
import { NgbNavModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { UserAccountSettingsComponent } from './user/user-settings/user-account-settings/user-account-settings.component';

import { OtherPreferncesComponent } from './user/user-preferences/other-prefernces/other-prefernces.component';
import { SubjectPreferencesComponent } from './user/user-preferences/subject-preferences/subject-preferences.component';
import { SharedModule } from './shared/shared.module';
import { NotificationPreferencesComponent } from './user/user-settings/notification-preferences/notification-preferences.component';
import { RootComponent } from './root.component';


@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    UserSettingsComponent,
    UserBasicInfoComponent,
    UserAccountSettingsComponent,
    SubjectPreferencesComponent,
    OtherPreferncesComponent,
    NotificationPreferencesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    InputTextModule,
    KeyFilterModule,
    HttpClientModule,
    NgbTypeaheadModule,
    NgbNavModule,
    SharedModule
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
