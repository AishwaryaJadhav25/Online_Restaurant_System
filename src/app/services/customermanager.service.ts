import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerManager } from '../models/customermanager';


@Injectable({
  providedIn: 'root'
})
export class CustomermanagerService {

  //customermanager: CustomerManager[] ;
  private baseUrl = '/api';

  constructor(private http:HttpClient) { 

  }

  getCustomerManager():Observable<any>
  {
     
    return this.http.get(`${this.baseUrl}`+'/authorities'); 

  }

  getRole():Observable<any>
   {  
     return this.http.get(`${this.baseUrl}`+'/roles'); 
   }

  del(b1:any)
 {
   return this.http.delete(`${this.baseUrl}`+'/deleteauthority?id='+b1);
 }

 addCustomerManager(b:CustomerManager)
 {
   return this.http.post(`${this.baseUrl}`+'/addauthority',b);
 }



}
