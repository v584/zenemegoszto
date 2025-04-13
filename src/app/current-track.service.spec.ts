import { TestBed } from '@angular/core/testing';

import { CurrentTrackService } from './current-track.service';

describe('CurrentTrackService', () => {
  let service: CurrentTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
