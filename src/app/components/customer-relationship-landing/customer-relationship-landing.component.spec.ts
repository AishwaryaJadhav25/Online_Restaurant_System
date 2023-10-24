import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRelationshipLandingComponent } from './customer-relationship-landing.component';

describe('CustomerRelationshipLandingComponent', () => {
  let component: CustomerRelationshipLandingComponent;
  let fixture: ComponentFixture<CustomerRelationshipLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRelationshipLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRelationshipLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
