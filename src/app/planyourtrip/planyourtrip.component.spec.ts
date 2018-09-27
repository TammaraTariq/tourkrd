import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanyourtripComponent } from './planyourtrip.component';

describe('PlanyourtripComponent', () => {
  let component: PlanyourtripComponent;
  let fixture: ComponentFixture<PlanyourtripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanyourtripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanyourtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
