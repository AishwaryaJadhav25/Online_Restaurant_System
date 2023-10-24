import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantproductComponent } from './restaurantproduct.component';

describe('RestaurantproductComponent', () => {
  let component: RestaurantproductComponent;
  let fixture: ComponentFixture<RestaurantproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
