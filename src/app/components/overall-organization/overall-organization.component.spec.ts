import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallOrganizationComponent } from './overall-organization.component';

describe('OverallOrganizationComponent', () => {
  let component: OverallOrganizationComponent;
  let fixture: ComponentFixture<OverallOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
