import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateTutorProfileService } from '../create-tutor-profile.service';
import { NgForm } from '@angular/forms';
import { User } from '../../core/models/user.model';
import { Audience, Language, TeachingLocation } from '../../shared/models/types';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit {
  tutor: User;
  submitted: boolean;
  isLocationSelected = true;
  isAudienceSelected = true;
  TeachingLocation = TeachingLocation;
  Audience = Audience;
  Language = Language

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private createProfileService: CreateTutorProfileService,
  ) {}

  ngOnInit(): void {
    this.tutor = this.createProfileService.getProfile();
  }

  onPrevious() {
    this.createProfileService.updateProfile(this.tutor);
    this.createProfileService.setCurrentStep(3);
    this.router.navigate(['subjects'], { relativeTo: this.route.parent });
  }

  onFinish(f: NgForm) {
    this.submitted = true;
    if (f.invalid || !this.isLocationSelected || !this.isAudienceSelected) {
      return;
    }
    this.createProfileService.updateProfile(this.tutor);
    this.createProfileService.createProfile().subscribe(() => {
        this.router.navigate(['tutor/me/profile']);
    });
  }

  onChange(type: string) {
    if (type === 'location-change') {
      this.isLocationSelected = this.isAtleastOneCheckboxSelected(this.tutor.tutorTeachingLocations);
    } else if (type === 'audience-change') {
      this.isAudienceSelected = this.isAtleastOneCheckboxSelected(this.tutor.tutorAudiences);
    }
  }

  private isAtleastOneCheckboxSelected(field: any[]) {
    const index = field.findIndex((checkbox) => checkbox.selected === true);
    if (index === -1) {
      return false;
    }
    return true;
  }

}
