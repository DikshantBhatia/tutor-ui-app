import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTutorComponent } from './welcome-tutor.component';

describe('WelcomeTutorComponent', () => {
  let component: WelcomeTutorComponent;
  let fixture: ComponentFixture<WelcomeTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeTutorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
