import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { forkJoin } from 'rxjs';
import { UserPreferencesService } from '../services/user-preferences.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.scss'],
})
export class StudentSubjectsComponent implements OnInit {
  categories: any = [];
  selectedSubCategories = [];
  loading;


  constructor(private contentService: ContentService, private userPreferenceService: UserPreferencesService, private router : Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loading = true;
    forkJoin([this.contentService.getCategories(), this.userPreferenceService.getMySubjects()]).subscribe(
      (response) => {
        this.categories = response[0];
        this.selectedSubCategories = response[1]['subjectIds'];
        this.categories.forEach((category) => {
          category.subcategories.forEach((subCategory) => {
            const index =
              this.selectedSubCategories &&
              this.selectedSubCategories.findIndex((subjectId) => {
                return subCategory.id === subjectId;
              });
            subCategory['selected'] =  index >= 0 ? true : false;
          });
        });
        console.log(this.categories);
        this.loading = false;
      }
    );
  }


  onToggleSubCategory(subCategory) {
    subCategory['selected'] = !subCategory['selected'];
    if (subCategory['selected']) {
      this.userPreferenceService.saveSubject(subCategory.id);
    } else {
      this.userPreferenceService.unSaveSubject(subCategory.id);
    }
  }

  navigateTo(url) {
    this.router.navigate([url], { relativeTo: this.route.parent });
  }

}
