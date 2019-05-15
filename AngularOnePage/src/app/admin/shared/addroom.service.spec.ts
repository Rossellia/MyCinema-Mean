import { TestBed, inject } from '@angular/core/testing';

import { AddroomService } from './addroom.service';

describe('AddroomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddroomService]
    });
  });

  it('should be created', inject([AddroomService], (service: AddroomService) => {
    expect(service).toBeTruthy();
  }));
});
