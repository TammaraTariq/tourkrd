import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingstodoinduhokComponent } from './thingstodoinduhok.component';

describe('ThingstodoinduhokComponent', () => {
  let component: ThingstodoinduhokComponent;
  let fixture: ComponentFixture<ThingstodoinduhokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingstodoinduhokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingstodoinduhokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
