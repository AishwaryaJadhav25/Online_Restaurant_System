import { TestBed } from '@angular/core/testing';

import { RestaurantproductService } from './restaurantproduct.service';

describe('RestaurantproductService', () => {
  let service: RestaurantproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
