import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsUpdateComponent } from './departments-update.component';

describe('DepartmentsUpdateComponent', () => {
  let component: DepartmentsUpdateComponent;
  let fixture: ComponentFixture<DepartmentsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
