import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ContentService } from '../core/services/content.service';
import { CreateProfilePreferencesModel } from './preferences/create-profile-preferences.model';

@Injectable({
  providedIn: 'root',
})
export class CreateTutorProfileService {
  constructor(private http: HttpClient, private authService: AuthService, private contentService: ContentService) {}

  basicDetails: any;
  qualifications: any;
  subjects = [];
  private preferences: CreateProfilePreferencesModel;
  private currentStep : string;

  setCurrentStep(route){
    this.currentStep =  route;
  }

  getCurrentStep(){
    return this.currentStep;
  }


  initializePreferences() {
    const locationPrefs = this.contentService.getTeachingLocations();
    const languages = this.contentService.getLanguages();
    const audience = this.contentService.getAudience();
    return new CreateProfilePreferencesModel({
      locationPreferences: locationPrefs,
      languagePreferences: languages,
      audiences: audience,
    });
  }

  setPreferences(prefs: CreateProfilePreferencesModel) {
    this.preferences = prefs;
  }

  getPreferences() {
    return this.preferences;
  }
}
