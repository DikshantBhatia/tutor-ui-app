import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckboxModel } from '../../shared/models/checkbox.model';
import { SelectItemModel } from '../../shared/models/select-item.model';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Audience, Language, TeachingLocation, TutorTeachingLocation } from '../../shared/models/types';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private categories: any[];

  constructor(private http: HttpClient) {}

  getCategories() {
    if (Array.isArray(this.categories) && this.categories.length) {
      return of(this.categories);
    }
    return this.http.get('/api/cms/categories').pipe(tap((res) => this.setCategoriesInMemory(res)));
  }

  getTeachingLocations() {
    const teachingLocations: CheckboxModel[] = [];
    teachingLocations.push(
      { value: TeachingLocation.MY_HOME, selected: false },
      { value: TeachingLocation.STUDENT_HOME, selected: false },
      { value: TeachingLocation.ONLINE, selected: false }
    );
    return teachingLocations;
  }

  getLanguages() {
    const languages: CheckboxModel[] = [];
    languages.push({ value: Language.EN, selected: false }, { value: Language.HI, selected: false });

    return languages;
  }

  getAudience() {
    const audience: CheckboxModel[] = [];
    audience.push(
      { value: Audience.ONE_TO_FIVE, selected: false },
      { value: Audience.SIX_TO_EIGHT, selected: false },
      { value: Audience.NINE_TO_TEN, selected: false },
      { value: Audience.ELEVEN_TO_TWELVE, selected: false },
      { value: Audience.OTHER, selected: false }
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

  private setCategoriesInMemory(subjects) {
    this.categories = subjects;
  }
}
