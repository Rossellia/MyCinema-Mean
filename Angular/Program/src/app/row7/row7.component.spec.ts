import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Row7Component } from './row7.component';

describe('Row7Component', () => {
  let component: Row7Component;
  let fixture: ComponentFixture<Row7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Row7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Row7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
