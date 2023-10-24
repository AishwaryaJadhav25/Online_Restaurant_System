import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Restaurant } from '../models/restaurant';
@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }

  getRestaurantList()
  {
    return this.http.get(`${this.baseUrl}`+'/restaurants');
  }

  getRestaurantById(rest_id:number)
  {
    return this.http.get(`${this.baseUrl}`+'/restaurant?id='+rest_id);
  }

  del(b1:Restaurant)
  {
    return this.http.delete(`${this.baseUrl}`+'/deleterestaurant?id='+b1.restaurant_id);
  }

  addCustomerManager(b:Restaurant)
  {
  
    return this.http.post(`${this.baseUrl}`+'/addrestaurant',b);

  }

  updatedetails(b:Restaurant,rest_id:number)
  {
  
    return this.http.put(`${this.baseUrl}`+'/updaterestaurant?id='+rest_id,b);

  }
  addRestaurant(rest:Restaurant)
  {
    return this.http.post(`${this.baseUrl}`+'/addrestaurant',rest);
  }
 
}
