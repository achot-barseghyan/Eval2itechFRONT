import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CommercialService} from "../../services/commercial.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-make-appointment-dialog',
  templateUrl: './make-appointment-dialog.component.html',
  styleUrls: ['./make-appointment-dialog.component.css']
})
export class MakeAppointmentDialogComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;
  commercialId: string = "";
  selectedDate: any;
  SelectedTime: any;
  userId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MakeAppointmentDialogComponent>,
    private commercialService: CommercialService,
    private userService: UserService,
  // @ts-ignore
    @Inject(MAT_DIALOG_DATA) data) {

    this.commercialId = data?.commercialId;
    this.selectedDate = `${new Date(data?.date).getHours()}:${new Date(data?.date).getMinutes() ? new Date(data?.date).getMinutes() : '00'}`;
    this.SelectedTime = data?.date;
  }

  // @ts-ignore
  commercialsList: [{
    id: Number;
    name: String
  }] = []

  ngOnInit() {
    this.userService.getConnectedUser().toPromise().then(response => {
      // @ts-ignore
      this.userId = response.id
    })
    this.form = this.fb.group({
      userId: this.userId,
      commercialId: new FormControl('', [
        Validators.required,
      ]),
      selectedTime: this.SelectedTime
    });
    this.commercialService.getAllCommercials().toPromise()
      .then(response => {
        this.commercialsList = response
      })
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
