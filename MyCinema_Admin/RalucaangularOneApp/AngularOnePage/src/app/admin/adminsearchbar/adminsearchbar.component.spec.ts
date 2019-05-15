import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsearchbarComponent } from './adminsearchbar.component';

describe('AdminsearchbarComponent', () => {
  let component: AdminsearchbarComponent;
  let fixture: ComponentFixture<AdminsearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
