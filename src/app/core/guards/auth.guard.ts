import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService) {}


  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>{
    if (this.authService.isLoggedIn()) {
      return of(true);
    } else {
      // try to autologin user from the available token
      return this.authService.autoLogin().pipe(
        map((res) => {
          return res && true;
        })
      );
    }
  }

}
