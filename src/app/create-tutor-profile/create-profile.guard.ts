import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateTutorProfileService } from './create-tutor-profile.service';

@Injectable({
  providedIn: 'root',
})
export class CreateProfileGuard implements CanActivateChild {
  constructor(private createTutorProfileService: CreateTutorProfileService, private router: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.createTutorProfileService.getCurrentStep() === childRoute.data.step) {
      return true;
    }
    this.createTutorProfileService.setCurrentStep(1);
    return this.router.createUrlTree(['create-profile/basic-details']);
  }
}
