import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const GLOBAL_URL = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<any> {
    let url = `${GLOBAL_URL}/appointment`;
    return this.http.get(url);
  }
}
