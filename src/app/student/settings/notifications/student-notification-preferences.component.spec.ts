import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotificationPreferencesComponent } from './notification-preferences.component';

describe('NotificationPreferencesComponent', () => {
  let component: StudentNotificationPreferencesComponent;
  let fixture: ComponentFixture<StudentNotificationPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNotificationPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNotificationPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
