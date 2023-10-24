import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegproductComponent } from './nonvegproduct.component';

describe('NonvegproductComponent', () => {
  let component: NonvegproductComponent;
  let fixture: ComponentFixture<NonvegproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonvegproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
