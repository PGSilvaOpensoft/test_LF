import { async, ComponentFixture, TestBed } from '../checkpoints/checkpoint3/end/src/app/components/reservation-details/node_modules/@angular/core/testingoint3/end/src/app/components/reservation-details/node_modules/@angular/core/testing';

import { reservationDetailsComponent } from './reservation-details.component';

describe('reservationDetailsComponent', () => {
  let component: reservationDetailsComponent;
  let fixture: ComponentFixture<reservationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ reservationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(reservationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});