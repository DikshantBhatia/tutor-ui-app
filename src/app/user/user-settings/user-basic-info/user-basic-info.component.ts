import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserSettingsService} from '../services/user-settings.service';


@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.scss']
})
export class UserBasicInfoComponent implements OnInit {

  basicInfoForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userSettingsService: UserSettingsService) { }

  ngOnInit(): void {
    this.basicInfoForm = this.formBuilder.group({
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       zipCode: ['', Validators.required],
       gender: [''],
       locationPref: [''],
       languagePref: [''],
    });

    setTimeout(() => {
     this.userSettingsService.getBasicInfo().subscribe(resp => {
       this.basicInfoForm.patchValue(resp);
     });
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
