import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../../auth/auth.service';
import {take, tap} from 'rxjs/operators';
import {User} from '../../../core/models/user.model';
import {Observable} from 'rxjs';





@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.scss']
})
export class UserBasicInfoComponent implements OnInit {

  basicInfoForm: FormGroup;
  submitted = false;
  user: Observable<User>;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {

    // tslint:disable-next-line:no-unused-expression
    // this.user = this.authService.user.pipe(take(1));



    this.basicInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      zipCode: ['', Validators.required],
      gender: [''],
      languagePreference: [''],
      locationPreference: [''],
    });

    setTimeout(() => {
      this.user = this.authService.user
                      .pipe(
                          take(1),
                          tap(userResponse => userResponse && this.basicInfoForm.patchValue(userResponse))
                        );

    }, 2000);


  }


  // convenience getter for easy access to form fields
  get f() { return this.basicInfoForm.controls; }

onSubmit() {
    this.submitted = true;
    if (this.basicInfoForm.invalid) {
      return;
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.basicInfoForm.value, null, 4));
  }

}
