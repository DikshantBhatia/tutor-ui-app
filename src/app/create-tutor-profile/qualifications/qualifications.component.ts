import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTutorProfileService } from '../create-tutor-profile.service';
import { SelectItemModel } from '../../shared/models/select-item.model';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss'],
})
export class QualificationsComponent implements OnInit {
  qualificationsForm: FormGroup;
  degrees: SelectItemModel[];
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private createProfileService: CreateTutorProfileService,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.qualificationsForm = this.formBuilder.group({
      education: this.formBuilder.group({
        instituteName: ['', Validators.required],
        degree: ['', Validators.required]
      }),
      workExperience: this.formBuilder.group({
        experienceInYears: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        experienceDescription: ['']
      })
    });

    this.degrees = this.contentService.getEducationDegrees();

    if (this.createProfileService.getProfile()) {
      this.qualificationsForm.patchValue(this.createProfileService.getProfile());
    }
  }

  get f() {
    return this.qualificationsForm.controls;
  }

  onNext() {
    this.submitted = true;
    if (this.qualificationsForm.invalid) {
      return;
    }
    this.createProfileService.updateProfile(this.qualificationsForm.value);
    this.createProfileService.setCurrentStep(3);
    this.router.navigate(['subjects'], { relativeTo: this.route.parent });
  }

  onPrevious() {
    this.createProfileService.updateProfile(this.qualificationsForm.value);
    this.createProfileService.setCurrentStep(1);
    this.router.navigate(['basic-details'], { relativeTo: this.route.parent });
  }
}
