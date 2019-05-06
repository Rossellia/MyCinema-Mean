import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPiechartsComponent } from './display-piecharts.component';

describe('DisplayPiechartsComponent', () => {
  let component: DisplayPiechartsComponent;
  let fixture: ComponentFixture<DisplayPiechartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPiechartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPiechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
