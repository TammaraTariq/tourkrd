import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErbilhotelComponent } from './erbilhotel.component';

describe('ErbilhotelComponent', () => {
  let component: ErbilhotelComponent;
  let fixture: ComponentFixture<ErbilhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErbilhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErbilhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
