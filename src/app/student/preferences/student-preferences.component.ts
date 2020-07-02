import { Component, OnInit } from '@angular/core';

import PlaceResult = google.maps.places.PlaceResult;
import { UserPreferencesService } from '../services/user-preferences.service';

@Component({
  selector: 'app-student-preferences',
  templateUrl: './student-preferences.component.html',
  styleUrls: ['./student-preferences.component.scss'],
})
export class StudentPreferencesComponent implements OnInit {
  loading;
  myPreferences: any;

  constructor(private userPreferencesService: UserPreferencesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.userPreferencesService.getMyOtherPreference().subscribe((response) => {
      this.myPreferences = response;
      this.loading = false;
    });
  }

  savePreferences() {
    this.userPreferencesService.updateMyPreference(this.myPreferences);
  }

  updateLocation(place: PlaceResult) {
    this.myPreferences.location.googlePlaceId = place.place_id;
    this.myPreferences.location.locationDescription = place.formatted_address;
  }
}
