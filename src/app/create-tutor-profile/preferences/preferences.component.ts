import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateTutorProfileService } from '../create-tutor-profile.service';
import { NgForm } from '@angular/forms';
import { User } from '../../core/models/user.model';
import { AUDIENCE_TAGS, Language, LANGUAGE_TAGS, Tag, TEACHING_LOCATION_TAGS } from '../../shared/models/types';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit {
  tutor: User;
  submitted: boolean;
  locationError = false;
  languageError = false;
  audienceError = false;

  teachingLocations  = TEACHING_LOCATION_TAGS;
  languages = LANGUAGE_TAGS;
  audiences = AUDIENCE_TAGS;

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
    if (f.invalid || !this.isValid()) {
      return;
    }
    this.createProfileService.updateProfile(this.tutor);
    this.createProfileService.createProfile();
    this.router.navigate(['tutor/me/profile']);

    /*this.createProfileService.createProfile().subscribe(() => {
        this.router.navigate(['tutor/me/profile']);
    });*/
  }


  private isValid() {
    let isValid = true;
    if(!this.tutor.teachingLocations || !this.tutor.teachingLocations.length) {
      isValid = false;
      this.locationError = true;
    }
    if(!this.tutor.teachingLanguages || !this.tutor.teachingLanguages.length) {
      isValid = false;
      this.languageError = true;
    }
    if(!this.tutor.audiences || !this.tutor.audiences.length) {
      isValid = false;
      this.audienceError = true;
    }
    return isValid;
  }

  onTagSelect(item: Tag, type:string) {

    switch (type) {
      case 'Location' :
        this.tutor.teachingLocations.push(item.id);
        break;
      case 'Language' :
        this.tutor.teachingLanguages.push(item.id);
        break;
      case 'Audience' :
        this.tutor.audiences.push(item.id);
        break;
    }
  }

  onTagRemove(tag: Tag, type:string) {

    switch (type) {
      case 'Location' :
        this.tutor.teachingLocations =  this.tutor.teachingLocations.filter(item => item !== tag.id);
        break;
      case 'Language' :
        this.tutor.teachingLanguages =  this.tutor.teachingLanguages.filter(item => item !== tag.id);
        break;
      case 'Audience' :
        this.tutor.audiences =  this.tutor.audiences.filter(item => item !== tag.id);
        break;
    }
  }


}
