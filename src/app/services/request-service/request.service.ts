import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  doGet(endpoint: string) : Observable<any> {
    return this.http.get(this.api + endpoint);
  }

  doPost(endpoint: string, object: Object) : Observable<any> {
    return this.http.post(this.api + endpoint, object);
  }

}