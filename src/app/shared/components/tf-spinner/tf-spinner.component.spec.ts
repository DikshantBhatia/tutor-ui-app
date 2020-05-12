import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfSpinnerComponent } from './tf-spinner.component';

describe('TfSpinnerComponent', () => {
  let component: TfSpinnerComponent;
  let fixture: ComponentFixture<TfSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
