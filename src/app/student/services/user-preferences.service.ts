import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  constructor(private http: HttpClient) {}

  getMySubjects() {
    return this.http.get('/api/users/me/preferences/subjects');
  }

  getMyOtherPreference() {
    return this.http.get('/api/users/me/preferences/other');
  }

  saveSubject(subjectId) {
    this.http.put('/api/users/me/preferences/subjects/' + subjectId + '/save', null).subscribe();
  }

  unSaveSubject(subjectId) {
    this.http.put('/api/users/me/preferences/subjects/' + subjectId + '/unsave', null).subscribe();
  }

  updateMyPreference(preference:any){
    this.http.put('/api/users/me/preferences/other', preference).subscribe();
  }

  getMyNotificationPreferences():Observable<any>{
    return this.http.get('/api/users/me/preferences/notification');
  }

  updateMyNotificationPreferences(notificationPreferences:any){
    console.log("Inside service");
    console.log(notificationPreferences);
    this.http.put('api/users/me/preferences/notification',notificationPreferences).subscribe();
  }


}
