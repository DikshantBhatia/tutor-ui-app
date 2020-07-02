import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';
import { CreateProfileGuard } from './create-tutor-profile/create-profile.guard';


const routes: Routes = [

  { path: 'home',
    loadChildren: () =>
      import("./home/home.module").then(m => m.HomeModule)
  },
  { path: 'auth',
    loadChildren: () =>
      import("./auth/auth.module").then(m => m.AuthModule)
  },
  { path: 'create-profile',
    canLoad : [CreateProfileGuard],
    loadChildren: () =>
      import("./create-tutor-profile/create-tutor-profile.module").then(m => m.CreateTutorProfileModule)
  },
  { path: 'student',
    loadChildren: () =>
      import("./student/student.module").then(m => m.StudentModule)
  },

  { path: '**', component: RootComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
