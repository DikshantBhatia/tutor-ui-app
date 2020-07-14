import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { AuthService } from '../../../auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TfModalComponent } from '../../../shared/components/tf-modal/tf-modal.component';
import { EducationModalComponent } from '../update/education-modal/education-modal.component';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  me: User;

  constructor(private authService: AuthService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.me = this.authService.userSubject.getValue();
  }

  getSubjectsDisplayableText() {
    return this.me.subjects.map((subject) => subject.description).join(',');
  }

  onEditEducation() {
    const modalRef = this.modalService.open(EducationModalComponent);
    modalRef.componentInstance.education = this.me.education;

    /*modalRef.result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        console.log(reason);
      }
    );*/
  }
}
