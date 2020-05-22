import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  constructor() { }

  getBasicInfo(): Observable<any> {
    return of({
      firstName: 'Dikshant',
      lastName: 'Bhatia',
      zipCode: 248001,
      gender: null,
      languagePref: null,
      locationPref: 'no-pref',
    });
  }

}
