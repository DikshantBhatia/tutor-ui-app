import { Component, OnInit } from '@angular/core';
import { NotificationPreference } from './notification-perference.model';
import { UserPreferencesService } from '../../services/user-preferences.service';

@Component({
  selector: 'app-notification-preferences',
  templateUrl: './notification-preferences.component.html',
  styleUrls: ['./notification-preferences.component.scss'],
})
export class NotificationPreferencesComponent implements OnInit {
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

  notifications:NotificationPreference[];
  error: any;

  savePreferences(){
    console.log(this.notifications);
    this.userPreferenceService.updateMyNotificationPreferences({'notificationPreferences':this.notifications});
    
  }

}
