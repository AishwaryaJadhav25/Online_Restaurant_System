import { TestBed } from '@angular/core/testing';

import { CustomermanagerService } from './customermanager.service';

describe('CustomermanagerService', () => {
  let service: CustomermanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomermanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
