import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmovieComponent } from './adminmovie.component';

describe('AdminmovieComponent', () => {
  let component: AdminmovieComponent;
  let fixture: ComponentFixture<AdminmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
