import { Component, OnInit } from '@angular/core';

import { UserPreferencesService } from '../../services/user-preferences.service';
import { NotificationPreference } from './student-notification-perference.model';

@Component({
  selector: 'app-student-notification-preferences',
  templateUrl: './student-notification-preferences.component.html',
  styleUrls: ['./student-notification-preferences.component.scss'],
})
export class StudentNotificationPreferencesComponent implements OnInit {


  notifications:NotificationPreference[];
  error: any;

  constructor(private userPreferenceService: UserPreferencesService) {}

  ngOnInit(): void {
    this.userPreferenceService.getMyNotificationPreferences().subscribe(
      (response) => {
        this.notifications=response['notificationPreferences'];
        console.log(this.notifications);
      },
      (errorRespone) => {
        this.error = errorRespone;
      }
    );
  }


  savePreferences(){
    console.log(this.notifications);
    this.userPreferenceService.updateMyNotificationPreferences({'notificationPreferences':this.notifications});
    
  }

}
