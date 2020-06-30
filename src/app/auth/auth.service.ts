import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../core/models/user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSubject = new BehaviorSubject<User>(null);
  authToken;

  constructor(private http: HttpClient, private router: Router) {}

  // request to generate otp for login
  sendOtp(phone) {
    return this.http.post('/api/auth/otp', phone);
  }

  // request to generate otp for signup
  sendOtpForSignup(authDto: any) {
    return this.http.post('/api/auth/signupotp', authDto);
  }

  loginStudent(phone, otp) {
    return this.http.post('/api/auth/signin', { phoneNumber: phone, password: otp }).pipe(
      tap((response) => {
        this.handleAuthentication(response);
      })
    );
  }

  loginTutor(phone, otp) {
    return this.http.post('/api/auth/signin', { phoneNumber: phone, password: otp }).pipe(
      tap((response) => {
        this.handleAuthentication(response);
      })
    );
  }

  /**
   * Logouts the user from backend
   *
   */
  logout() {
    this.http.get('api/auth/signout').pipe(
      tap((res) => {
        this.removeUserContext();
      })
    ).subscribe(()=> {
      this.router.navigate(['home']);
    });
  }

  // delete usercontext and token from the frontend
  removeUserContext(){
    this.userSubject.next(null);
    this.authToken = null;
    localStorage.removeItem('tf-token');
  }


  signup(userDetails: any) {
    return this.http
      .post('/api/auth/signup', userDetails)
      .pipe(tap((responseData) => this.handleAuthentication(responseData)));
  }

  signupTutor(userDetails: any) {
    return this.http
      .post('/api/auth/signup/tutor', userDetails)
      .pipe(tap((responseData) => this.handleAuthentication(responseData)));
  }

  // make a call to backend to get user details(role etc). It will also verify if token is valid or not
  getCurrentUser() : Observable<User> {
    return this.http.get<User>('/api/users/me');
  }


  /**
   * Create the user from userResponse returned from backend.
   * It then emits user as subject through rxjs
   */
  createUser(userResponse) {
    const user = new User(userResponse);
    this.userSubject.next(user);
  }

  deleteUser(userResponse) {
    this.userSubject.next(null);
    this.authToken = null;
    localStorage.removeItem('tf-token');
  }

  isLoggedIn(){
    if(this.authToken && this.userSubject.getValue()){
      return true;
    }
    return false;
  }


  getTokenFromStorage(){
    return localStorage.getItem('tf-token');
  }


  // gets the token from response and stores it in localstorage
  private handleAuthentication(response) {
    this.authToken = response.tft;
    localStorage.setItem('tf-token', this.authToken);
    this.createUser(response.user);
  }



}
