import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployementComponent } from './employement.component';

describe('EmployementComponent', () => {
  let component: EmployementComponent;
  let fixture: ComponentFixture<EmployementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
