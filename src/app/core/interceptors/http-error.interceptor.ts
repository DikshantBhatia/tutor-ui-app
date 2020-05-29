import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    // below is temp logic, permanent will be added once approach from backend is final
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
