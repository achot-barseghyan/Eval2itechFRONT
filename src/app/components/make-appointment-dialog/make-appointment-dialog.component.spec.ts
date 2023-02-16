import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAppointmentDialogComponent } from './make-appointment-dialog.component';

describe('MakeAppointmentDialogComponent', () => {
  let component: MakeAppointmentDialogComponent;
  let fixture: ComponentFixture<MakeAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeAppointmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
