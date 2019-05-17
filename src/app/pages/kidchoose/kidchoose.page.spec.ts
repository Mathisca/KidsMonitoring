import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidchoosePage } from './kidchoose.page';

describe('KidchoosePage', () => {
  let component: KidchoosePage;
  let fixture: ComponentFixture<KidchoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidchoosePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidchoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
