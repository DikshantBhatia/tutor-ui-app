import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective implements OnInit {

  @Input() addressType: string;
  @Output() onPlaceSelect: EventEmitter<any> = new EventEmitter<any>();

  private element: HTMLInputElement;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {

  // @ts-ignore
    const autocomplete = new google.maps.places.Autocomplete(this.element,
      {
        componentRestrictions: { country: 'IN' },
        types: [this.addressType]  // '(cities)' / 'address' / 'geocode' / '(regions)'
        }
      );

    // Event listener to monitor place changes in the input
    // @ts-ignore
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      // Emit the new address object for the updated place
      this.onPlaceSelect.emit(autocomplete.getPlace());
    });


    // @ts-ignore
     // this.autoCompleteService = new google.maps.places.AutocompleteService();
  }


  /*@HostListener('input') onInput(event) {
    console.log(event);
    this.autoCompleteService.getPlacePredictions({
      types : [this.addressType],
      componentRestrictions: { country: 'IN' },
      input: this.element.value
    },
      (predictions, status) => {
      console.log(predictions);
      }
    );
  }*/


}
