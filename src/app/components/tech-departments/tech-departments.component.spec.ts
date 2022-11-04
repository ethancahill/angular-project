import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDepartmentsComponent } from './tech-departments.component';

describe('TechDepartmentsComponent', () => {
  let component: TechDepartmentsComponent;
  let fixture: ComponentFixture<TechDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
