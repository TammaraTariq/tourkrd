import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuhokcityComponent } from './duhokcity.component';

describe('DuhokcityComponent', () => {
  let component: DuhokcityComponent;
  let fixture: ComponentFixture<DuhokcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuhokcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuhokcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
