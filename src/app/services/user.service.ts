import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const GLOBAL_URL = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getConnectedUser(){
    let url = `${GLOBAL_URL}/user`;
    return this.http.get<String>(
      url
    );
  }

  saveAppointment(data: any): Observable<any> {
    let url = `${GLOBAL_URL}/user/make-appointment`;
    // @ts-ignore
    return this.http.post<String>(
      url,
      data
    );
  }
}
