import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderManager } from '../models/ordermanager';


@Injectable({
  providedIn: 'root'
})
export class OrdermanagerService {

  //ordermanager: OrderManager[] ;
  private baseUrl = '/api';

  constructor(private http:HttpClient) {}

  getOrderManager():Observable<any>
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

  addOrderManager(b:OrderManager)
  {
    //alert(b);
    return this.http.post(`${this.baseUrl}`+'/addauthority',b);
    //return this.http.post(`${this.baseUrl}`+'/products',product);

  }

}
