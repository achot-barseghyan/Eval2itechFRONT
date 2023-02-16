import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import TimeGrid from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {CommercialService} from "../../services/commercial.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MakeAppointmentDialogComponent} from "../make-appointment-dialog/make-appointment-dialog.component";
import {UserService} from "../../services/user.service";
import {AppointmentService} from "../../services/appointment.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [TimeGrid, interactionPlugin],
    events: [
      {title: 'event 1', date: '2023-02-16 09:00'},
      {title: 'event 2', date: '2019-04-02'}
    ],
    // @ts-ignore
    dateClick: this.handleDateClick.bind(this),
    slotMinTime: "09:30",
    slotMaxTime: "18:30",
    nowIndicator: true,
    selectable: true,
    firstDay: new Date().getDay()
  };

  // @ts-ignore
  commercialsList: [{
    name: String
  }] = []

  // @ts-ignore
  appointmentsList: [{
  }] = []

  constructor(
    private commercialService: CommercialService,
    private appointmentService: AppointmentService,
    private dialog: MatDialog,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.commercialService.getAllCommercials().toPromise()
      .then(response => {
        this.commercialsList = response
      })
    this.appointmentService.getAllAppointments().toPromise()
      .then(response => {
        this.appointmentsList = response
      })
  }

  handleDateClick(arg: any) {
    arg.jsEvent.preventDefault();
    if (new Date(arg.dateStr).getTime() > new Date().getTime()) {
      this.openDialog(arg.dateStr)
    } else {
      alert("You can't make an appointment at that time because it is past!");
    }
  }

  openDialog(dateStr: string) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      date: new Date(dateStr)
    };

    const dialogRef = this.dialog.open(MakeAppointmentDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log(data)
        this.userService.saveAppointment({
          userId: 4,
          commercialId: data.commercialId,
          appointmentDateTime: data.selectedTime
        }).toPromise()
          .then(res => {

          })
      }
    );
  }
}
