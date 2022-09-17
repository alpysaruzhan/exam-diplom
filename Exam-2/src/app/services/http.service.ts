import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url= 'http://localhost:3000/tasks'

  constructor(public http: HttpClient) { }

  getTasks():Observable<any>{
    return this.http.get(this.url)
  }

}
