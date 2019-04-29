import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Access404Component } from './access404.component';

describe('Access404Component', () => {
  let component: Access404Component;
  let fixture: ComponentFixture<Access404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Access404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Access404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
