import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const GLOBAL_URL = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class CommercialService {


  constructor(private http: HttpClient) { }

  getAllCommercials(): Observable<any> {
    let url = `${GLOBAL_URL}/commercial`;
    return this.http.get(url);
  }
}
