import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../core/models/user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MockDataService } from '../core/services/mock.data.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSubject = new BehaviorSubject<User>(null);
  authToken;

  constructor(private http: HttpClient, private router: Router, private mockDataService: MockDataService) {}

  // request to generate otp for login
  sendOtp(phone) {
    // return this.http.post('/api/auth/otp', phone);

    return of(true);
  }

  // request to generate otp for signup
  sendOtpForSignup(authDto: any) {
    // return this.http.post('/api/auth/signupotp', authDto);

    return of(true);
  }

  loginStudent(phone, otp) {

    /*return this.http.post('/api/auth/signin', { phoneNumber: phone, password: otp }).pipe(
      tap((response) => {
        this.handleAuthentication(response);
      })
    );*/
   return this.http.get<User>( 'assets/student.json').pipe(
      tap((response) => {
        this.handleAuthentication(response);
      })
    );


  }

  loginTutor(phone, otp) {

    /*return this.http.post('/api/auth/signin/tutor', { phoneNumber: phone, password: otp }).pipe(
      tap((response) => {
        this.handleAuthentication(response);
      })
    );*/
    return this.http.get<User>('assets/tutor.json').pipe(
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
    /*this.http
      .get('api/auth/signout')
      .pipe(
        tap((res) => {
          this.removeUserContext();
        })
      )
      .subscribe(() => {
        this.router.navigate(['home']);
      });*/

    this.removeUserContext();
    this.router.navigate(['home']);
  }

  // delete usercontext and token from the frontend
  removeUserContext() {
    this.userSubject.next(null);
    this.authToken = null;
    localStorage.removeItem('tf-token');
  }

  signup(userDetails: any) {
    /*return this.http
      .post('/api/auth/signup', userDetails)
      .pipe(tap((responseData) => this.handleAuthentication(responseData)));*/
    return this.mockDataService
      .signupStudent(userDetails)
      .pipe(tap((responseData) => this.handleAuthentication(responseData)))
  }

  signupTutor(userDetails: any) {
    /*return this.http
      .post('/api/auth/signup/tutor', userDetails)
      .pipe(tap((responseData) => this.handleAuthentication(responseData)));*/

    return this.mockDataService
      .signupTutor(userDetails)
      .pipe(tap((responseData) => this.handleAuthentication(responseData)))
  }

  // make a call to backend to get user details(role etc). It will also verify if token is valid or not
  getCurrentUser(): Observable<User> {
    return this.http.get<User>('assets/student.json');
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

  isLoggedIn() {
    if (this.authToken && this.userSubject.getValue()) {
      return true;
    }
    return false;
  }

  autoLogin(): Observable<any> {
    //  getting token from localstorage
    const token = this.getTokenFromStorage();
    // checking if token is empty,null,undefined or string with undefined value
    if (!token || token === 'undefined') {
      return of(false);
    }

    return this.getCurrentUser().pipe(
      tap((response) => {
        this.authToken = token;
        this.createUser(response);
      })
    );
  }

  getTokenFromStorage() {
    return localStorage.getItem('tf-token');
  }

  // gets the token from response and stores it in localstorage
  private handleAuthentication(response) {
    this.authToken = response.tft ? response.tft : "abde";
    localStorage.setItem('tf-token', this.authToken);
    this.createUser(response.user);
  }






}
