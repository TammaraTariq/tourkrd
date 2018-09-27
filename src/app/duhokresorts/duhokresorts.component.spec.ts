import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuhokresortsComponent } from './duhokresorts.component';

describe('DuhokresortsComponent', () => {
  let component: DuhokresortsComponent;
  let fixture: ComponentFixture<DuhokresortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuhokresortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuhokresortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
