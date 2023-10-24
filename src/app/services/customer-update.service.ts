import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerUpdateService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }

  getCustomers():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/customers');
  }

  updateCustomer(cust_id:number,customer:Customer):Observable<any>
  {
    return this.http.put<Customer>(`${this.baseUrl}`+'/updatecustomer/'+cust_id,customer);
  }
  
  registerCustomer(customer:Customer):Observable<any>
  {
    return this.http.post<Customer>(`${this.baseUrl}`+'/addcustomer',customer);
  }

}
