import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesReservationComponent } from './mes-reservation.component';

describe('MesReservationComponent', () => {
  let component: MesReservationComponent;
  let fixture: ComponentFixture<MesReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesReservationComponent]
    });
    fixture = TestBed.createComponent(MesReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
