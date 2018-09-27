import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErbilrestaurantComponent } from './erbilrestaurant.component';

describe('ErbilrestaurantComponent', () => {
  let component: ErbilrestaurantComponent;
  let fixture: ComponentFixture<ErbilrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErbilrestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErbilrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
