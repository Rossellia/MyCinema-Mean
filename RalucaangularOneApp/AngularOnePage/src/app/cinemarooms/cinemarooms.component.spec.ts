import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaroomsComponent } from './cinemarooms.component';

describe('CinemaroomsComponent', () => {
  let component: CinemaroomsComponent;
  let fixture: ComponentFixture<CinemaroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
