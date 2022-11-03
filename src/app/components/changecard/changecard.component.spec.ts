import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangecardComponent } from './changecard.component';

describe('ChangecardComponent', () => {
  let component: ChangecardComponent;
  let fixture: ComponentFixture<ChangecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
