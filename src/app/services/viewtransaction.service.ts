import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewtransactionService {

  private baseUrl = '/api';

  constructor(private http:HttpClient) { }

  getCustomerList():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/orders'); 
  }
}
