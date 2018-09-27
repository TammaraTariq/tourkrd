import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuhokhotelComponent } from './duhokhotel.component';

describe('DuhokhotelComponent', () => {
  let component: DuhokhotelComponent;
  let fixture: ComponentFixture<DuhokhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuhokhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuhokhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
