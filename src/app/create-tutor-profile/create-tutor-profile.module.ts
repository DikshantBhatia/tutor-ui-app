import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CreateTutorProfileComponent } from './create-tutor-profile.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { PreferencesComponent } from './preferences/preferences.component';
import { CreateTutorProfileGuard } from './create-tutor-profile.guard';

@NgModule({
  declarations: [CreateTutorProfileComponent, BasicDetailsComponent, QualificationsComponent, SubjectsComponent, PreferencesComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CreateTutorProfileComponent,
        /*canActivate: [CreateTutorProfileGuard],*/
        children: [
          { path: 'basic-details', component: BasicDetailsComponent },
          { path: 'qualifications', component: QualificationsComponent },
          { path: 'subjects', component: SubjectsComponent },
          { path: 'preferences', component: PreferencesComponent },
        ],
      },
    ]),
    SharedModule

  ],
})
export class CreateTutorProfileModule {}
