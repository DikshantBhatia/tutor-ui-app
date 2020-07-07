import { Component, OnInit } from '@angular/core';
import { UserType } from '../../shared/models/user-type';


@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit{

  userType = UserType;

  ngOnInit(): void {
  }

}
