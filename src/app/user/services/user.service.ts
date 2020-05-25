import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {User} from '../../core/models/user.model';
import {AuthService} from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient, private authService: AuthService) {
  }

  updateUser(user): Observable<User> {
    return this.http
      .put<User>(
        '/api/users/myself',
        user
      )
      .pipe(
        tap(userResponse => this.authService.createUser(userResponse))
      );
  }


}

