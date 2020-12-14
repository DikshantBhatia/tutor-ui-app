import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ContactInfo, UserType } from '../../shared/models/types';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

   token  = "abcdef";

    signupStudent(userDetails: any){
      const userResponse = this.getUser(userDetails);
      userResponse.type = UserType.STUDENT;

      return of({tft: this.token, user : userResponse});
  }

    signupTutor(userDetails: any){
      const userResponse = this.getUser(userDetails);
      userResponse.type = UserType.TUTOR;
      userResponse.profileCreated = false;
      return of({tft: this.token, user : userResponse});

    }

    getUser(userDetails: any): User{
      const userResponse = new User(userDetails);
      const contactInfo: ContactInfo = {
        phoneNumber: userDetails.phoneNumber
      }
      userResponse.contactInfo = contactInfo
      return userResponse;
    }




}
