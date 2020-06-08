import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  constructor(private http: HttpClient) {}

  getMyPreferences() {
    return this.http.get('/api/users/me/preferences');
  }

  saveSubject(subjectId) {
    this.http.put('/api/users/me/preferences/subjects/' + subjectId + '/save', null).subscribe();
  }

  unSaveSubject(subjectId) {
    this.http.put('/api/users/me/preferences/subjects/' + subjectId + '/unsave', null).subscribe();
  }
}
