import { TestBed } from '@angular/core/testing';

import { DiscordUserService } from './discord-user.service';

describe('DiscordUserService', () => {
  let service: DiscordUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscordUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
