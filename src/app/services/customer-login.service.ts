import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {

  user: Customer;
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  checkValidUser(email: string, password: string) 
  {
    return this.http.get(`${this.baseUrl}` + '/login?email=' + `${email}` + '&password=' + `${password}`);
  }

  logOutUser() {
    this.user = JSON.parse(sessionStorage.getItem('currentcustomer'));
    sessionStorage.removeItem('currentcustomer');
  }
}
