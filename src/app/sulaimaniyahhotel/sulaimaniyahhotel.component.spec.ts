import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SulaimaniyahhotelComponent } from './sulaimaniyahhotel.component';

describe('SulaimaniyahhotelComponent', () => {
  let component: SulaimaniyahhotelComponent;
  let fixture: ComponentFixture<SulaimaniyahhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SulaimaniyahhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SulaimaniyahhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
