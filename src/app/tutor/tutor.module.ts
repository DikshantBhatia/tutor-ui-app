import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TutorHomeComponent } from './tutor-home.component';

@NgModule({
  declarations: [
    TutorHomeComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'me',
        component: TutorHomeComponent,
      },
    ]),
    SharedModule,
    NgbDropdownModule,
  ],
})
export class TutorModule {}
