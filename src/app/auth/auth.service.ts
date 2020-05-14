import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  sendOtp(phone) {
    return this.http
      .post(
      '/api/users/otp', phone
      );
  }

  /* has response type text now as string is sent from backend*/
  login(phone, otp) {
    return this.http
      .post(
      '/api/users/signin',
      {
          phoneNumber : phone,
          password : otp
        }, {
        responseType : 'text'
        }
      );
  }



}


