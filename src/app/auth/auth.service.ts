import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from '../core/models/user.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  sendOtp(phone) {
    return this.http
      .post(
      '/api/users/otp', phone
      );
  }

  /* has response type text now as string is sent from backend*/
  login(phone, otp) {
    return this.http
      .post(
      '/api/users/signin',
      {
          phoneNumber : phone,
          password : otp
        }, {
        responseType : 'text'
        }
      )
      .pipe(
        tap(responseData => {
            this.handleAuthentication(responseData, null);
          })
        );

  }

  private handleAuthentication(token: string, role: string) {
    const user = new User(token, role);
    this.user.next(user);
    localStorage.setItem('tf-user', JSON.stringify(user));
  }



}


