import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginContainerComponent } from './login/login-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [LoginContainerComponent, LoginComponent, SignupComponent],
  imports: [
    ReactiveFormsModule,
    NgbNavModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild([
      { path: 'identify', component: LoginContainerComponent },
      { path: 'register/student', component: SignupComponent },
      { path: 'register/tutor', component: SignupComponent },
    ]),
  ],
})
export class AuthModule {}
