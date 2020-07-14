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
import { TfModalComponent } from './components/tf-modal/tf-modal.component';
import { TfTagListComponent } from './components/tf-tag-list/tf-tag-list.component';

@NgModule({
  declarations: [TfOtpInputComponent, TfSpinnerComponent, TfVerifyAccountComponent, GooglePlacesDirective, FixedBottomStepperComponent, NumberOnlyDirective, TfModalComponent, TfTagListComponent],
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
    FixedBottomStepperComponent,
    TfModalComponent,
    TfTagListComponent,
  ],
})
export class SharedModule {}
