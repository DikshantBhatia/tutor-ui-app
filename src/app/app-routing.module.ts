import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { OtherPreferncesComponent } from './user/user-preferences/other-prefernces/other-prefernces.component';
import { SubjectPreferencesComponent } from './user/user-preferences/subject-preferences/subject-preferences.component';
import { HomeTutorsComponent } from './home-tutors/home-tutors.component';
import { SignupComponent } from './auth/signup/signup.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tutors', component: HomeTutorsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'me/settings', component: UserSettingsComponent },
  { path: 'me/preferences/subjects', component: SubjectPreferencesComponent },
  { path: 'me/preferences/other', component: OtherPreferncesComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/tutor', component: SignupComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
