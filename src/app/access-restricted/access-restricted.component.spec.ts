import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRestrictedComponent } from './access-restricted.component';

describe('AccessRestrictedComponent', () => {
  let component: AccessRestrictedComponent;
  let fixture: ComponentFixture<AccessRestrictedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRestrictedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
