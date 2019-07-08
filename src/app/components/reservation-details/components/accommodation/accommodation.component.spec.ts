import { async, ComponentFixture, TestBed } from '../checkpoints/checkpoint3/end/src/app/components/reservation-details/components/accommodation/node_modules/@angular/core/testingoint3/end/src/app/components/reservation-details/components/accommodation/node_modules/@angular/core/testing';

import { AccommodationComponent } from './accommodation.component';

describe('AccommodationComponent', () => {
  let component: AccommodationComponent;
  let fixture: ComponentFixture<AccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
