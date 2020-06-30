import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  template: '',
})
export class RootComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // redirect based on application state

    if (this.authService.isLoggedIn()) {
        this.redirectToAppropriateHome();
    } else {
      //  getting token from localstorage
      const token = this.authService.getTokenFromStorage();
      // checking if token is empty,null,undefined or string with undefined value
      if (!token || token === 'undefined') {
        // guest user
        this.router.navigate(['home']);
      } else {
        // checking if token is still valid, if invalid user is redirect to login page from error interceptor
        this.authService.getCurrentUser().subscribe((user) => {
          this.authService.authToken = token;
          this.authService.createUser(user);
          this.redirectToAppropriateHome();
        });
      }
    }
  }


  // redirecting to root page based on user role and profile status
  private redirectToAppropriateHome() {
    const currentUser = this.authService.userSubject.getValue();
    // @ts-ignore
    if (currentUser.roles[0] === 'Tutor') {
      if (currentUser.profileStatus === 'NOT_CREATED') {
        this.router.navigate(['create-profile/basic-details']);
      } else {
        // root page for tutor
        this.router.navigate(['home']);
      }
    } else {
      // root page for student
      this.router.navigate(['home']);
    }
  }
}
