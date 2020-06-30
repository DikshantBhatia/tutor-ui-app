import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateTutorProfileService } from './create-tutor-profile.service';

@Injectable({
  providedIn: 'root',
})
export class CreateTutorProfileGuard implements CanActivate {

  constructor(private createTutorProfileService: CreateTutorProfileService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // tslint:disable-next-line:no-debugger
    debugger;
    if(this.createTutorProfileService.getCurrentStep() === state.url){
      return true;
    }
    return this.router.createUrlTree(['']);;

  }
}
