import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  activeItem = 1;

  constructor() { }

  ngOnInit(): void {

  }

  setActiveItem(activeItem: number) {
     this.activeItem = activeItem;
  }
}
