import { TestBed } from '@angular/core/testing';

import { ViewproductsService } from './viewproducts.service';

describe('ViewproductsService', () => {
  let service: ViewproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
