import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumberComponent } from './mobile-number.component';

describe('MobileNumberComponent', () => {
  let component: MobileNumberComponent;
  let fixture: ComponentFixture<MobileNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
