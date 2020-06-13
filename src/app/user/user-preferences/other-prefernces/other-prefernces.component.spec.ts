import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPreferncesComponent } from './other-prefernces.component';

describe('OtherPreferncesComponent', () => {
  let component: OtherPreferncesComponent;
  let fixture: ComponentFixture<OtherPreferncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPreferncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPreferncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
