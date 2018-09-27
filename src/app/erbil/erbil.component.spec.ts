import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErbilComponent } from './erbil.component';

describe('ErbilComponent', () => {
  let component: ErbilComponent;
  let fixture: ComponentFixture<ErbilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErbilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErbilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
