import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuhokRestaurantComponent } from './duhok-restaurant.component';

describe('DuhokRestaurantComponent', () => {
  let component: DuhokRestaurantComponent;
  let fixture: ComponentFixture<DuhokRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuhokRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuhokRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
