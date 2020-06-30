import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { OtherPreferncesComponent } from './user/user-preferences/other-prefernces/other-prefernces.component';
import { SubjectPreferencesComponent } from './user/user-preferences/subject-preferences/subject-preferences.component';
import { NotificationPreferencesComponent } from './user/user-settings/notification-preferences/notification-preferences.component';
import { RootComponent } from './root.component';


const routes: Routes = [

  { path: '', component: RootComponent},
  { path: 'home',
    loadChildren: () =>
      import("./home/home.module").then(m => m.HomeModule)
  },
  { path: 'auth',
    loadChildren: () =>
      import("./auth/auth.module").then(m => m.AuthModule)
  },
  { path: 'create-profile',
    loadChildren: () =>
      import("./create-tutor-profile/create-tutor-profile.module").then(m => m.CreateTutorProfileModule)
  },
  { path: 'me/settings', component: UserSettingsComponent },
  { path: 'me/preferences/subjects', component: SubjectPreferencesComponent },
  { path: 'me/preferences/other', component: OtherPreferncesComponent },
  { path: 'me/preferences/notification', component: NotificationPreferencesComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
