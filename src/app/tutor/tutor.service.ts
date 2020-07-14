import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Education } from '../shared/models/types';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TutorService {

  constructor(private http: HttpClient, private authService: AuthService) {}

   updateEducation(data: Education){
      return this.http.put('/api/tutors/me/education', data)
       .pipe(tap((userResponse) => this.authService.createUser(userResponse)));
   }

}
