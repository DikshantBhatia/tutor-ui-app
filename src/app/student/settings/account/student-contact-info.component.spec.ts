import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContactInfoComponent } from './user-account-settings.component';

describe('UserAccountSettingsComponent', () => {
  let component: StudentContactInfoComponent;
  let fixture: ComponentFixture<StudentContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentContactInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
