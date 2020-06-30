import { Component, OnInit } from '@angular/core';
import { CreateTutorProfileService } from '../create-tutor-profile/create-tutor-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private createProfileService: CreateTutorProfileService) {}

  ngOnInit(): void {
     this.createProfileService.setCurrentStep('/create-profile/basic-details');
  }

}
