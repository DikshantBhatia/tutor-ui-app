import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../../auth/auth.service';
import {take, tap} from 'rxjs/operators';
import {User} from '../../../core/models/user.model';
import {Observable} from 'rxjs';
import PlaceResult = google.maps.places.PlaceResult;


@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.scss']
})
export class UserBasicInfoComponent implements OnInit {

  basicInfoForm: FormGroup;
  submitted = false;
  user: Observable<User>;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private authService: AuthService) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.basicInfoForm.controls;
  }

  ngOnInit(): void {

    this.basicInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      googlePlaceId: [''],
      gender: [''],
      languagePreference: [''],
      locationPreference: [''],
    });

    this.user = this.authService.user
      .pipe(
        take(1),
        tap(userResponse => userResponse && this.basicInfoForm.patchValue(userResponse))
      );

  }

  onSubmit() {
    this.submitted = true;
    if (this.basicInfoForm.invalid) {
      return;
    }
    // display form values on success
    this.userService.updateUser(this.basicInfoForm.value).subscribe(response => {
      alert('user saved');
    });

  }

  updateAddress(place: PlaceResult) {
    this.basicInfoForm.patchValue({
      address: place.formatted_address,
      googlePlaceId: place.place_id
    });
  }

}
