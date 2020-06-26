import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetlightUser1Component } from './streetlight-user1.component';

describe('StreetlightUser1Component', () => {
  let component: StreetlightUser1Component;
  let fixture: ComponentFixture<StreetlightUser1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetlightUser1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetlightUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
