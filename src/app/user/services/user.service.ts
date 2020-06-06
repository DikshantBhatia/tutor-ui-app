import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../../core/models/user.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  updateUser(user): Observable<User> {
    return this.http
      .put<User>('/api/users/me', user)
      .pipe(tap((userResponse) => this.authService.createUser(userResponse)));
  }

  phoneOtp(authDto: any): Observable<any> {
    return this.http.post('/api/users/phoneotp', authDto);
  }

  changePhone(user: any): Observable<any> {
    return this.http
      .put('/api/users/phone', user)
      .pipe(tap((userResponse) => this.authService.createUser(userResponse)));
  }

  emailOtp(userDto: any): Observable<any> {
    return this.http.post('/api/users/emailotp', userDto);
  }

  changeEmail(user: any): Observable<any> {
    return this.http
      .put('/api/users/email', user)
      .pipe(tap((userResponse) => this.authService.createUser(userResponse)));
  }

  deleteUser(): Observable<any> {
    return this.http.delete('/api/users/').pipe(tap((response) => {
      this.authService.deleteUser(response);
    }));
  }
}
