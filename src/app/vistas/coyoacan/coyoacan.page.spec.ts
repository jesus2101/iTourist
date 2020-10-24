import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoyoacanPage } from './coyoacan.page';

describe('CoyoacanPage', () => {
  let component: CoyoacanPage;
  let fixture: ComponentFixture<CoyoacanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoyoacanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoyoacanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
