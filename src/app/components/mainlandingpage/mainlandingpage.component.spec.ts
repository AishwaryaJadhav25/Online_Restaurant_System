import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlandingpageComponent } from './mainlandingpage.component';

describe('MainlandingpageComponent', () => {
  let component: MainlandingpageComponent;
  let fixture: ComponentFixture<MainlandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
