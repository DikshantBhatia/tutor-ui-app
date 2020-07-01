import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CreateTutorProfileComponent } from './create-tutor-profile.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { CreateProfileChildGuard } from './create-profile-child.guard';

@NgModule({
  declarations: [
    CreateTutorProfileComponent,
    BasicDetailsComponent,
    QualificationsComponent,
    SubjectsComponent,
    PreferencesComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CreateTutorProfileComponent,
        canActivateChild: [CreateProfileChildGuard],
        children: [
          { path: 'basic-details', component: BasicDetailsComponent, data: { step: 1 } },
          { path: 'qualifications', component: QualificationsComponent, data: { step: 2 } },
          { path: 'subjects', component: SubjectsComponent, data: { step: 3 } },
          { path: 'preferences', component: PreferencesComponent, data: { step: 4 } },
        ],
      },
    ]),
    SharedModule,
  ],
})
export class CreateTutorProfileModule {}
