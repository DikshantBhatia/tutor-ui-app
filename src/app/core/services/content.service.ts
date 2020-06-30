import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckboxModel } from '../../shared/models/checkbox.model';
import { SelectItemModel } from '../../shared/models/select-item.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private subjects: any[];

  constructor(private http: HttpClient) {}

  getCategories() {
    if (Array.isArray(this.subjects) && this.subjects.length) {
      return of(this.subjects);
    }
    return this.http.get('/api/cms/categories');
  }

  setCategoriesInMemory(subjects) {
    this.subjects = subjects;
  }

  getTeachingLocations() {
    const teachingLocations: CheckboxModel[] = [];
    teachingLocations.push(
      { label: 'My Home', code: 'my-home', selected: false },
      { label: 'Student Home', code: 'student-home', selected: false },
      { label: 'Online', code: 'online', selected: false }
    );

    return teachingLocations;
  }

  getLanguages() {
    const languages: CheckboxModel[] = [];
    languages.push({ label: 'English', code: 'en', selected: false }, { label: 'Hindi', code: 'hi', selected: false });

    return languages;
  }

  getAudience() {
    const audience: CheckboxModel[] = [];
    audience.push(
      { label: 'Class 1 to 5', code: '1-5', selected: false },
      { label: 'Class 6 to 8', code: '6-8', selected: false },
      { label: 'Class 9 to 10', code: '9-10', selected: false },
      { label: 'Class 11 to 12', code: '11-12', selected: false },
      { label: 'Other', code: 'other', selected: false }
    );

    return audience;
  }

  getEducationDegrees() {
    const degrees: SelectItemModel[] = [];
    degrees.push(
      { label: 'Secondary(10th)', value: 'secondary' },
      { label: 'Higher Secondary(12th)', value: 'higher-secondary' },
      { label: 'Bachelors', value: 'bachelors' },
      { label: 'Masters', value: 'masters' },
      { label: 'Others', value: 'other' }
    );
    return degrees;
  }
}
