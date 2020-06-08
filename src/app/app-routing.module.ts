import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LearningPreferencesComponent } from './user/user-preferences/learning-preferences/learning-preferences.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'me/settings', component: UserSettingsComponent },
  { path: 'me/preferences', component: LearningPreferencesComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
