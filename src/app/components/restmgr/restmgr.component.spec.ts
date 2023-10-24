import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestmgrComponent } from './restmgr.component';

describe('RestmgrComponent', () => {
  let component: RestmgrComponent;
  let fixture: ComponentFixture<RestmgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestmgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestmgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
