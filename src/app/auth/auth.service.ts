import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../core/models/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  authToken;

  constructor(private http: HttpClient) {}

  // request to generate otp for login
  sendOtp(phone) {
    return this.http.post('/api/auth/otp', phone);
  }

  // request to generate otp for signup
  sendOtpForSignup(authDto: any) {
    return this.http.post('/api/auth/signupotp', authDto);
  }

  login(phone, otp) {
    return this.http.post('/api/auth/signin', { phoneNumber: phone, password: otp }).pipe(
      tap((response) => {
        this.handleAuthentication(response);
      })
    );
  }

  /**
   * This method is called when application is initialized. It gets the authToken from localstorage if present.
   * The token is then send to be validated at the backend. If token is valid, user is logged in, else user is redirected to login page
   * or stays on the home page.
   */
  autoLogin() {
    const token = localStorage.getItem('tf-token');
    // getting token from localstorage and checking if token is empty,null,undefined or string with undefined value
    if (!token || token === 'undefined') {
      return;
    }
    this.authToken = token;
    // make a call to backend to get user details(role etc). It will also verify if token is valid or not
    this.http.get<User>('/api/users/me').subscribe((userResponse) => {
      this.createUser(userResponse);
    });
  }

  /**
   * Logouts the user from backend and delete usercontext and token from the frontend
   *
   */
  logout() {
    return this.http.get('api/users/logout').pipe(
      tap((res) => {
        this.user.next(null);
        this.authToken = null;
        localStorage.removeItem('tf-token');
      })
    );
  }

  signup(userDetails: any) {
    return this.http
      .post('/api/auth/signup', userDetails)
      .pipe(tap((responseData) => this.handleAuthentication(responseData)));
  }

  // gets the token from response and stores it in localstorage
  private handleAuthentication(response) {
    this.authToken = response.tft;
    localStorage.setItem('tf-token', this.authToken);
    this.createUser(response.user);
  }

  /**
   * Create the user from userResponse returned from backend.
   * It then emits user as subject through rxjs
   */
  createUser(userResponse) {
    const user = new User(userResponse);
    this.user.next(user);
  }

  deleteUser(userResponse) {
    this.user.next(null);
    this.authToken = null;
    localStorage.removeItem('tf-token');
  }
}
