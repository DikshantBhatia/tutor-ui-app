import { TestBed } from '@angular/core/testing';

import { CreateProfileGuard } from './create-profile.guard';

describe('CreateTutorProfileGuard', () => {
  let guard: CreateProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
