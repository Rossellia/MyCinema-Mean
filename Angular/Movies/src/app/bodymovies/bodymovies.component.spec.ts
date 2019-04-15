import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodymoviesComponent } from './bodymovies.component';

describe('BodymoviesComponent', () => {
  let component: BodymoviesComponent;
  let fixture: ComponentFixture<BodymoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodymoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
