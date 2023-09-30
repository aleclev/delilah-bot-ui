import { TestBed } from '@angular/core/testing';

import { GroupEventService } from './group-event.service';

describe('GroupEventService', () => {
  let service: GroupEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
