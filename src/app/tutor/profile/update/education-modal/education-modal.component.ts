import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Education } from '../../../../shared/models/types';
import { NgForm } from '@angular/forms';
import { TutorService } from '../../../tutor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectItemModel } from '../../../../shared/models/select-item.model';
import { ContentService } from '../../../../core/services/content.service';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.scss']
})
export class EducationModalComponent implements OnInit {

  @Input() education : Education;
  @ViewChild('educationForm') form: NgForm;
  degrees: SelectItemModel[];

  constructor(private tutorService: TutorService, private modalService: NgbModal, private contentService: ContentService) { }

  ngOnInit(): void {
    this.degrees = this.contentService.getEducationDegrees();
  }

  onSave() {
    if(!this.form.valid) {
       return;
    }
    this.tutorService.updateEducation(this.form.value).subscribe(() => {
      this.modalService.dismissAll();
    });
  }
}
