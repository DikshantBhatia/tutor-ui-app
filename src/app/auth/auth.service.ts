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
  authToken;

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
        }
      )
      .pipe(
        tap(response => {
            this.handleAuthentication(response);
          }),
        );

  }

  autoLogin() {
     const token = localStorage.getItem('tf-token');
     if (!token || token === 'undefined') {
       return;
     }
     this.authToken = token;
     // make a call to backend to get user details(role etc). It will also verify if token is valid or not
     this.http
       .get<User>('/api/users')
       .subscribe( userResponse => {
          this.createUser(userResponse);
       });
  }

  private handleAuthentication(response) {
    this.authToken = response.tft;
    localStorage.setItem('tf-token', this.authToken);
    this.createUser(response.user);
  }

  private createUser(userResponse) {
    const user = new User(userResponse);
    this.user.next(user);
  }


}


