import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';

import { StudentGuard } from './core/guards/student.guard';
import { TutorGuard } from './core/guards/tutor.guard';
import { UserType } from './shared/models/types';



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
    canLoad : [TutorGuard],
    data: {
      role : UserType.TUTOR,
      profileCreated: false
    },
    loadChildren: () =>
      import("./create-tutor-profile/create-tutor-profile.module").then(m => m.CreateTutorProfileModule)
  },
  { path: 'student',
    canLoad: [StudentGuard],
    data: {
      role : UserType.STUDENT
    },
    loadChildren: () =>
      import("./student/student.module").then(m => m.StudentModule)
  },
  { path: 'tutor',
    canLoad: [TutorGuard],
    data: {
      role : UserType.TUTOR,
      profileCreated: true
    },
    loadChildren: () =>
      import("./tutor/tutor.module").then(m => m.TutorModule)
  },
  { path: '**', component: RootComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
