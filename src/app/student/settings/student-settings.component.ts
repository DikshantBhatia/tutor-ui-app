import { AfterContentInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-settings',
  templateUrl: './student-settings.component.html',
  styleUrls: ['./student-settings.component.scss'],
})
export class StudentSettingsComponent implements OnInit, AfterContentInit {
  activeItem = 1;
  public model: any;
  /*searching = false;
  searchFailed = false;
  search;
  formatter;
  locations;
  autoCompleteService = new google.maps.places.AutocompleteService();*/

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  setActiveItem(activeItem: number) {
    this.activeItem = activeItem;
  }

  updateAdd(event: NgbTypeaheadSelectItemEvent) {
    console.log(event.item);
  }

  ngAfterContentInit(): void {
    /*this.search =  (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(term =>
          this.getLocations(term).pipe(
            tap((resp) => {
                this.searchFailed = false;
                console.log(resp);
              }
            ),
            catchError(() => {
              this.searchFailed = true;
              return of([]);
            }))
        ),
        tap(() => this.searching = false)
      );

    this.formatter = (result: string) => result['description'];*/
  }

  /*getLocations(term) {
    return new Observable((observer) => {
      this.autoCompleteService.getPlacePredictions({
          types : ['(cities)'],
          componentRestrictions: { country: 'IN' },
          input: term
        },
        (predictions, status) => {
          observer.next(predictions);
        }
      )
    // When the consumer unsubscribes, clean up data ready for next subscription.
      return {
        unsubscribe() {

        }
      };
    });
  }*/
}
