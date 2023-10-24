import { TestBed } from '@angular/core/testing';

import { OrdermanagerService } from './ordermanager.service';

describe('OrdermanagerService', () => {
  let service: OrdermanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdermanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
