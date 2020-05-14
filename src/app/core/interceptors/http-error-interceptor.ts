import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(errorRes: HttpErrorResponse) {
    // below is temp logic, permanent will be added once approach from backend is final
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.message) {
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

