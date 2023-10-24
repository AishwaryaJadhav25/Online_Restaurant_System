import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../models/orderdetail';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }

  getallOrders():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/orders');
  }
  getOrders(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/restaurantproductbyrestoid?rest_id='+id);
  }
  putOrder(order:Orders):Observable<any>
  { 
    return this.http.post(`${this.baseUrl}`+'/addorder',order);;
  }
  putOrderDetail(orddetail:OrderDetails[]):Observable<any>
  {
    return this.http.post(`${this.baseUrl}`+'/addorderdetail',orddetail);
  }
  getOrdersbycustomer(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/orderbycustomer?cust_id='+id);
  }

  updateOrder(order:Orders):Observable<any>
  {
    return this.http.put(`${this.baseUrl}` + `/updateorder/${order.order_id}`, order);
  }

  getFeedbackbyResstId(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/feedbackbyrestId?rest_id='+id);
  }
  getFeedbacks():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/feedbacks');
  }

  
  
  
}
