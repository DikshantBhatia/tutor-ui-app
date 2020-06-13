import { Component, OnInit } from '@angular/core';
import PlaceResult = google.maps.places.PlaceResult;
import { UserPreferencesService } from '../../services/user-preferences.service';

@Component({
  selector: 'app-other-prefernces',
  templateUrl: './other-prefernces.component.html',
  styleUrls: ['./other-prefernces.component.scss']
})
export class OtherPreferncesComponent implements OnInit {

  loading;
  myPreferences: any;

  constructor(private userPreferencesService: UserPreferencesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userPreferencesService.getMyOtherPreference().subscribe(response => {
      this.myPreferences = response;
      this.loading = false;
    });

  }



  savePreferences() {
    console.log(this.myPreferences);
    this.userPreferencesService.updateMyPreference(this.myPreferences)
  }

  updateLocation(place: PlaceResult) {
    this.myPreferences.location.googlePlaceId = place.place_id;
    this.myPreferences.location.locationDescription = place.formatted_address;
  }
}
