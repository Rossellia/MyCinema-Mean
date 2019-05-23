import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprogramComponent } from './showprogram.component';

describe('ShowprogramComponent', () => {
  let component: ShowprogramComponent;
  let fixture: ComponentFixture<ShowprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
