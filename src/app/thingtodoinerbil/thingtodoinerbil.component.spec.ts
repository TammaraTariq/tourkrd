import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingtodoinerbilComponent } from './thingtodoinerbil.component';

describe('ThingtodoinerbilComponent', () => {
  let component: ThingtodoinerbilComponent;
  let fixture: ComponentFixture<ThingtodoinerbilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingtodoinerbilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingtodoinerbilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
