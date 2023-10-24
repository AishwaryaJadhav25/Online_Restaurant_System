import { TestBed } from '@angular/core/testing';

import { ViewtransactionService } from './viewtransaction.service';

describe('ViewtransactionService', () => {
  let service: ViewtransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewtransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
