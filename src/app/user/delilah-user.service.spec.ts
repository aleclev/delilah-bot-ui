import { TestBed } from '@angular/core/testing';

import { DelilahUserService } from './delilah-user.service';

describe('UserService', () => {
  let service: DelilahUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelilahUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
