import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateTutorProfileService } from '../create-tutor-profile.service';
import { CreateProfilePreferencesModel } from './create-profile-preferences.model';
import { NgForm } from '@angular/forms';
import { CheckboxModel } from '../../shared/models/checkbox.model';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit {
  preferences: CreateProfilePreferencesModel;
  submitted: boolean;
  isLocationSelected: boolean;
  isAudienceSelected: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private createProfileService: CreateTutorProfileService
  ) {}

  ngOnInit(): void {
    if (this.createProfileService.getPreferences()) {
      this.preferences = this.createProfileService.getPreferences();
    } else {
      this.preferences = this.createProfileService.initializePreferences();
    }
  }

  onPrevious() {
    this.createProfileService.setPreferences(this.preferences);
    this.router.navigate(['subjects'], { relativeTo: this.route.parent });
  }

  onFinish(f: NgForm) {
    this.submitted = true;
    if (f.invalid || !this.isLocationSelected || !this.isAudienceSelected) {
      return;
    }
    this.createProfileService.setPreferences(this.preferences);
  }

  onChange(type: string) {
    if (type === 'location-change') {
      this.isLocationSelected = this.isAtleastOneCheckboxSelected(this.preferences.locationPreferences);
    } else if (type === 'audience-change') {
      this.isAudienceSelected = this.isAtleastOneCheckboxSelected(this.preferences.audiences);
    }
  }

  private isAtleastOneCheckboxSelected(checboxes: CheckboxModel[]) {
    const index = checboxes.findIndex((checkbox) => checkbox.selected === true);
    if (index === -1) {
      return false;
    }
    return true;
  }
}
