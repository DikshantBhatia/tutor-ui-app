import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StudentPreferencesComponent } from './preferences/student-preferences.component';
import { StudentSettingsComponent } from './settings/student-settings.component';
import { StudentBasicInfoComponent } from './settings/basic-info/student-basic-info.component';
import { StudentContactInfoComponent } from './settings/account/student-contact-info.component';
import { StudentNotificationPreferencesComponent } from './settings/notifications/student-notification-preferences.component';
import { StudentSubjectsComponent } from './subjects/student-subjects.component';
import { StudentHomeComponent } from './student-home.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    StudentPreferencesComponent,
    StudentSettingsComponent,
    StudentBasicInfoComponent,
    StudentContactInfoComponent,
    StudentNotificationPreferencesComponent,
    StudentSubjectsComponent,
    StudentHomeComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'me',
        component: StudentHomeComponent,

        children: [
          { path: 'settings', component: StudentSettingsComponent },
          { path: 'subjects', component: StudentSubjectsComponent },
          { path: 'preferences', component: StudentPreferencesComponent },
        ],
      },
    ]),
    SharedModule,
    NgbDropdownModule,
    LayoutModule
  ],
})
export class StudentModule {}
