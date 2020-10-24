import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemocPage } from './temoc.page';

describe('TemocPage', () => {
  let component: TemocPage;
  let fixture: ComponentFixture<TemocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
