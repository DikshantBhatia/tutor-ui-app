import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  template: '',
})
export class RootComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.redirectToAppropriateHome();
    } else {
      // try to autologin user from the available token
      this.authService.autoLogin().subscribe((res) => {
        if (res) {
          this.redirectToAppropriateHome();
        } else {
          this.router.navigate(['auth/identify']);
        }
      });
    }
  }

  // redirecting to root page based on user role and profile status
  private redirectToAppropriateHome() {
    const currentUser = this.authService.userSubject.getValue();
    if (currentUser.roles[0] === 'Tutor') {
      if (!currentUser.profileCreated) {
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
