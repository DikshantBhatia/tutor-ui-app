import { NgModule } from '@angular/core';
import { TfOtpInputComponent } from './components/tf-otp-input/tf-otp-input.component';
import { TfSpinnerComponent } from './components/tf-spinner/tf-spinner.component';
import { TfVerifyAccountComponent } from './components/tf-verify-email/tf-verify-account.component';
import { GooglePlacesDirective } from './directives/google-places.directive';
import { BlockUIModule } from 'primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FixedBottomStepperComponent } from './components/fixed-bottom-stepper/fixed-bottom-stepper.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
  declarations: [TfOtpInputComponent, TfSpinnerComponent, TfVerifyAccountComponent, GooglePlacesDirective, FixedBottomStepperComponent, NumberOnlyDirective],
  imports: [FormsModule, ReactiveFormsModule, BlockUIModule, CommonModule, NgbTypeaheadModule],
  exports: [
    TfOtpInputComponent,
    TfSpinnerComponent,
    TfVerifyAccountComponent,
    GooglePlacesDirective,
    NumberOnlyDirective,
    CommonModule,
    BlockUIModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    FixedBottomStepperComponent
  ],
})
export class SharedModule {}
