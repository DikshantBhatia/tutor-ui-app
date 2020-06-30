import { TestBed } from '@angular/core/testing';

import { CreateTutorProfileGuard } from './create-tutor-profile.guard';

describe('CreateTutorProfileGuard', () => {
  let guard: CreateTutorProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateTutorProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
