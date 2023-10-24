import { TestBed } from '@angular/core/testing';

import { RestsvcService } from './restsvc.service';

describe('RestsvcService', () => {
  let service: RestsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
