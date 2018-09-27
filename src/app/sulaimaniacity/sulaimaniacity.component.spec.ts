import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SulaimaniacityComponent } from './sulaimaniacity.component';

describe('SulaimaniacityComponent', () => {
  let component: SulaimaniacityComponent;
  let fixture: ComponentFixture<SulaimaniacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SulaimaniacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SulaimaniacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
