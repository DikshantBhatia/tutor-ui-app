import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log(this.router);
    console.log(this.authService);
    return next.handle(request).pipe(
      catchError((err) => {
        return this.handleError(err);
      })
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    // a different logic needs to be added for 403
    if (errorResponse.status === 403 || errorResponse.status === 401) {
      this.authService.removeUserContext();
      this.router.navigateByUrl('auth/identify');
      return of(errorResponse as any);

    } else {
      // temporary code TODO
      let errorMessage = 'An unknown error occurred!';
      if (!errorResponse.error) {
        return throwError(errorMessage);
      }
      switch (errorResponse.error.message) {
        case 'User not found':
          errorMessage = 'Phone number does not exist. Please sign up first or login with other options.';
          break;
        case 'Login Failed':
          errorMessage = 'Otp is not valid';
          break;
      }
      return throwError(errorMessage);
    }
  }
}
