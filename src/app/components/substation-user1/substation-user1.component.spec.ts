import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstationUser1Component } from './substation-user1.component';

describe('SubstationUser1Component', () => {
  let component: SubstationUser1Component;
  let fixture: ComponentFixture<SubstationUser1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstationUser1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstationUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
