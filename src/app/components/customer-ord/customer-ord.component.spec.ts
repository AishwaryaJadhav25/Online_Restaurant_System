import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrdComponent } from './customer-ord.component';

describe('CustomerOrdComponent', () => {
  let component: CustomerOrdComponent;
  let fixture: ComponentFixture<CustomerOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
