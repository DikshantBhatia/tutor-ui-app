import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateTutorProfileService } from './create-tutor-profile.service';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CreateProfileGuard implements CanLoad {
  constructor(
    private createTutorProfileService: CreateTutorProfileService,
    private router: Router,
    private authService: AuthService
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      return this.validateUser();
    } else {
      // try to autologin user from the available token
      return this.authService.autoLogin().pipe(
        map((res) => {
          return res && this.validateUser();
        })
      );
    }
  }

  private validateUser() {
    const user = this.authService.userSubject.getValue();
    if (user.roles[0] === 'Tutor' && user.profileStatus === 'NOT_CREATED') {
      return true;
    }
    return false;
  }
}
