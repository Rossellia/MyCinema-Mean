import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomebarComponent } from './adminhomebar.component';

describe('AdminhomebarComponent', () => {
  let component: AdminhomebarComponent;
  let fixture: ComponentFixture<AdminhomebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhomebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhomebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
