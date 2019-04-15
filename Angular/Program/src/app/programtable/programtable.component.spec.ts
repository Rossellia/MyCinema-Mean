import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramtableComponent } from './programtable.component';

describe('ProgramtableComponent', () => {
  let component: ProgramtableComponent;
  let fixture: ComponentFixture<ProgramtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
