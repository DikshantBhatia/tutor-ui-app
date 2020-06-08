import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../core/services/content.service';
import { forkJoin } from 'rxjs';
import { UserPreferencesService } from '../../services/user-preferences.service';

@Component({
  selector: 'app-learning-preferences',
  templateUrl: './learning-preferences.component.html',
  styleUrls: ['./learning-preferences.component.scss'],
})
export class LearningPreferencesComponent implements OnInit {
  categories: any = [];
  selectedSubCategories = [];
  loading;

  constructor(private contentService: ContentService, private userPreferenceService: UserPreferencesService) {}

  ngOnInit(): void {
    this.loading = true;
    forkJoin([this.contentService.getCategories(), this.userPreferenceService.getMyPreferences()]).subscribe(
      (response) => {
        this.categories = response[0];
        this.selectedSubCategories = response[1]['subjects'];
        this.categories.forEach((category) => {
          category.subcategories.forEach((subCategory) => {
            const index =
              this.selectedSubCategories &&
              this.selectedSubCategories.findIndex((subjectId) => {
                return subCategory.id === subjectId;
              });
            subCategory['selected'] = index !== -1 ? true : false;
          });
        });
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
}
