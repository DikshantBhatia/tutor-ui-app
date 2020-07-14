import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TutorHomeComponent } from './tutor-home.component';
import { ViewProfileComponent } from './profile/view/view-profile.component';

import { EducationModalComponent } from './profile/update/education-modal/education-modal.component';

@NgModule({
  declarations: [
    TutorHomeComponent,
    ViewProfileComponent,
    EducationModalComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'me',
        component: TutorHomeComponent,
        children: [
          { path: 'profile', component: ViewProfileComponent }

        ],
      },
    ]),
    SharedModule,
    NgbDropdownModule,
  ],
})
export class TutorModule {}
