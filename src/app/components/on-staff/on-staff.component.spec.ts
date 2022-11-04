import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnStaffComponent } from './on-staff.component';

describe('OnStaffComponent', () => {
  let component: OnStaffComponent;
  let fixture: ComponentFixture<OnStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
