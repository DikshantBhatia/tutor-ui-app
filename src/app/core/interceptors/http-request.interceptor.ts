import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {exhaustMap, take} from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

      if (!this.authService.authToken) {
        return next.handle(req);
      }
      const modifiedReq = req.clone({
        setHeaders : {
          Authorization : `Bearer ${this.authService.authToken}`
        }
      });
      return next.handle(modifiedReq);

    }

}

