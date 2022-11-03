import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBarComponent } from './border-bar.component';

describe('BorderBarComponent', () => {
  let component: BorderBarComponent;
  let fixture: ComponentFixture<BorderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
