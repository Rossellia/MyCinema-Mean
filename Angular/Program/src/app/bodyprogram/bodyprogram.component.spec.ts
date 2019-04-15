import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyprogramComponent } from './bodyprogram.component';

describe('BodyprogramComponent', () => {
  let component: BodyprogramComponent;
  let fixture: ComponentFixture<BodyprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
