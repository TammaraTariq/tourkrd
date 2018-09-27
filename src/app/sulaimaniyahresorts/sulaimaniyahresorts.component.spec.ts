import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SulaimaniyahresortsComponent } from './sulaimaniyahresorts.component';

describe('SulaimaniyahresortsComponent', () => {
  let component: SulaimaniyahresortsComponent;
  let fixture: ComponentFixture<SulaimaniyahresortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SulaimaniyahresortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SulaimaniyahresortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
