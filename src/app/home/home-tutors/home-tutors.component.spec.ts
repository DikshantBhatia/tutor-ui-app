import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTutorsComponent } from './home-tutors.component';

describe('HomeTutorsComponent', () => {
  let component: HomeTutorsComponent;
  let fixture: ComponentFixture<HomeTutorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTutorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
