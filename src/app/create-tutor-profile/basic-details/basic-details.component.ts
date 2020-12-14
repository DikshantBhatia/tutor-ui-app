import { Component, OnInit } from '@angular/core';
import { CreateTutorProfileService } from '../create-tutor-profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../student/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import PlaceResult = google.maps.places.PlaceResult;
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent implements OnInit {
  basicDetailsForm: FormGroup;
  submitted = false;
  loading: boolean;
  selectedCity: PlaceResult;

  constructor(
    private createTutorProfileService: CreateTutorProfileService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.basicDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        googlePlaceId: [''],
        description: [''],
        type: 'CITY'
      }),
      profilePicture: [null],
      aboutMe: [''],
      tagline: ['', Validators.required],
    });

    if (!this.createTutorProfileService.getProfile()) {
      this.basicDetailsForm.patchValue(this.authService.userSubject.getValue());
      this.loading = false;
    } else {
      this.basicDetailsForm.patchValue(this.createTutorProfileService.getProfile());
      this.loading = false;
    }
  }

  get f() {
    return this.basicDetailsForm.controls;
  }

  updateAddress(place: PlaceResult) {
    this.selectedCity = place;
    this.basicDetailsForm.patchValue({
      address: {
        googlePlaceId: place.place_id,
        description: place.formatted_address,
      },
    });
  }

  onNext() {
    this.submitted = true;
    if (this.basicDetailsForm.invalid) {
      return;
    }
    this.createTutorProfileService.updateProfile(this.basicDetailsForm.value);
    console.log(this.basicDetailsForm.value);
    this.createTutorProfileService.setCurrentStep(2);
    this.router.navigate(['qualifications'], { relativeTo: this.route.parent });
  }

  handleFileInput(event: any) {
    if (event.target.files) {
      const profilePic = event.target.files[0];
      this.basicDetailsForm.patchValue({
        profilePicture: profilePic,
      });
    }
  }

  checkPlace() {
    if (this.selectedCity && this.selectedCity.formatted_address !== this.f.address.value.description) {
      this.basicDetailsForm.patchValue({
        address: {
          googlePlaceId: '',
          description: '',
        },
      });
    }
  }
}
