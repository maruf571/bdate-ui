import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiURL} from "../ApiURL";
import {Observable} from "rxjs";

@Injectable()
export class PeopleService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<any>{
    return this.http.get(ApiURL.people);
  }

  findById(id:string): Observable<any>{
    return this.http.get(ApiURL.people + id)
  }
}
