import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfVerifyAccountDetailsComponent } from './tf-verify-email.component';

describe('TfVerifyEmailComponent', () => {
  let component: TfVerifyAccountDetailsComponent;
  let fixture: ComponentFixture<TfVerifyAccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfVerifyAccountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfVerifyAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
