import { TestBed } from '@angular/core/testing';

import { DictionaryService as DictionaryService } from './dictionary-service';

describe('DictionaryServiceService', () => {
  let service: DictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
