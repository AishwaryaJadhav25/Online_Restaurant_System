import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagerLandingComponent } from './order-manager-landing.component';

describe('OrderManagerLandingComponent', () => {
  let component: OrderManagerLandingComponent;
  let fixture: ComponentFixture<OrderManagerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderManagerLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
