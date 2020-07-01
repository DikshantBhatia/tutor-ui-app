import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../../core/services/content.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { CreateTutorProfileService } from '../create-tutor-profile.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  categories: any = [];
  mySubjects;
  subjectNotSelected: boolean;
  loading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contentService: ContentService,
    private createProfileService: CreateTutorProfileService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.contentService.getCategories().subscribe((response) => {
      this.categories = response;
      this.contentService.setCategoriesInMemory(response);
      this.mySubjects = this.createProfileService.subjects;
      this.loading = false;
    });
  }

  onAddSubject(subject: any) {
    const selectedSubject = this.mySubjects.find((sub) => sub.id === subject.id);
    this.subjectNotSelected = false;
    if (!selectedSubject) {
      this.mySubjects.push(subject);
    }
  }

  onSelectSubject(event: NgbTypeaheadSelectItemEvent) {
    const selectedSubject = this.mySubjects.find((sub) => sub.id === event.item.id);
    if (!selectedSubject) {
      this.mySubjects.push(event.item);
    }
    this.subjectNotSelected = false;
    event.preventDefault();
    this.searchInput.nativeElement.value = '';
  }

  onRemoveSubject(subject: any) {
    this.mySubjects = this.mySubjects.filter((sub) => sub.id !== subject.id);
  }

  subjectFormatter = (subject: any) => subject.description;

  searchSubjects = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        this.categories
          .flatMap((cat) => cat.subcategories)
          .filter((v) => v.description.toLowerCase().startsWith(term.toLocaleLowerCase()))
          .splice(0, 10)
      )
    );

  onPrevious() {
    this.createProfileService.subjects = this.mySubjects;
    this.createProfileService.setCurrentStep(2);
    this.router.navigate(['qualifications'], { relativeTo: this.route.parent });
  }

  onNext() {
    if (!Array.isArray(this.mySubjects) || !this.mySubjects.length) {
      this.subjectNotSelected = true;
      return;
    }
    this.createProfileService.subjects = this.mySubjects;
    this.createProfileService.setCurrentStep(4);
    this.router.navigate(['preferences'], { relativeTo: this.route.parent });
  }
}
