import { Injectable } from '@angular/core';
import { CanLoad, Data, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

import { AuthGuard } from './auth.guard';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TutorGuard implements CanLoad {
  constructor(private authGuard: AuthGuard, private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authGuard
      .canLoad(route, segments)
      .pipe(map((result) => result && this.validatePermissions(route.data)));
  }

  private validatePermissions(data: Data) {
    const user = this.authService.userSubject.getValue();
    if (user.roles[0] === data.role && data.profileCreated === user.profileCreated) {
      return true;
    }
    this.router.navigate(['notfound']);
    return false;
  }
}
