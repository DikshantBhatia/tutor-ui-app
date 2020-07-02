import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPreferencesComponent } from './other-prefernces.component';

describe('OtherPreferncesComponent', () => {
  let component: StudentPreferencesComponent;
  let fixture: ComponentFixture<StudentPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
