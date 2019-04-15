import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Row4Component } from './row4.component';

describe('Row4Component', () => {
  let component: Row4Component;
  let fixture: ComponentFixture<Row4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Row4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Row4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
