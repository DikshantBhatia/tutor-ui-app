import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ContentService } from '../core/services/content.service';
import { CreateProfilePreferencesModel } from './preferences/create-profile-preferences.model';
import { User } from '../core/models/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CreateTutorProfileService {
  constructor(private http: HttpClient, private authService: AuthService, private contentService: ContentService) {}

  private profile: User;

   // private preferences: CreateProfilePreferencesModel;
  private currentStep = 1;

  setCurrentStep(stepNumber) {
    this.currentStep = stepNumber;
  }

  getCurrentStep() {
    return this.currentStep;
  }

  getProfile(): User {
    return this.profile;
  }

  updateProfile(details) {
    if (!this.profile) {
      this.initializeProfile();
    }
    Object.assign(this.profile, details);
    console.log(this.profile);
  }


  createProfile() {
    return this.http
      .put('/api/tutors/me', this.profile)
      .pipe(tap((tutor) => this.authService.createUser(tutor)));
  }


  private initializeProfile() {
    this.profile = this.authService.userSubject.getValue();
  }
}
