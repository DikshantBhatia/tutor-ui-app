import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-profile-tutor',
  templateUrl: './create-tutor-profile.component.html',
  styleUrls: ['./create-tutor-profile.component.scss']
})
export class CreateTutorProfileComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2, private authService: AuthService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }


  logout() {
    this.authService.logout();
  }
}
