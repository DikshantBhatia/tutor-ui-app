import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeTutorsComponent } from './home-tutors/home-tutors.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [HomeComponent, HomeTutorsComponent],
  imports: [

    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'tutors', component: HomeTutorsComponent },
    ]),
    LayoutModule,
  ],
})
export class HomeModule {}
