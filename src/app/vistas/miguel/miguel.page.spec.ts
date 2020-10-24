import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiguelPage } from './miguel.page';

describe('MiguelPage', () => {
  let component: MiguelPage;
  let fixture: ComponentFixture<MiguelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiguelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiguelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
