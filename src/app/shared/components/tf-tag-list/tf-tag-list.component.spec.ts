import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfTagListComponent } from './tf-tag-list.component';

describe('TfTagListComponent', () => {
  let component: TfTagListComponent;
  let fixture: ComponentFixture<TfTagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfTagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
