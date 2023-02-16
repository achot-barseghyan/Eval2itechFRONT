import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import {MatListModule} from "@angular/material/list";
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MakeAppointmentDialogComponent } from './components/make-appointment-dialog/make-appointment-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MakeAppointmentDialogComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
