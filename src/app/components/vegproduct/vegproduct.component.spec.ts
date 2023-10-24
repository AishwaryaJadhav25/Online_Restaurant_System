import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegproductComponent } from './vegproduct.component';

describe('VegproductComponent', () => {
  let component: VegproductComponent;
  let fixture: ComponentFixture<VegproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
