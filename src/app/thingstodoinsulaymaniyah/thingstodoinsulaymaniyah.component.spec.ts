import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingstodoinsulaymaniyahComponent } from './thingstodoinsulaymaniyah.component';

describe('ThingstodoinsulaymaniyahComponent', () => {
  let component: ThingstodoinsulaymaniyahComponent;
  let fixture: ComponentFixture<ThingstodoinsulaymaniyahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingstodoinsulaymaniyahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingstodoinsulaymaniyahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
