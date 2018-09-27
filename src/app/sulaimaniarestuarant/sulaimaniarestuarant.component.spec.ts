import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SulaimaniarestuarantComponent } from './sulaimaniarestuarant.component';

describe('SulaimaniarestuarantComponent', () => {
  let component: SulaimaniarestuarantComponent;
  let fixture: ComponentFixture<SulaimaniarestuarantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SulaimaniarestuarantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SulaimaniarestuarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
