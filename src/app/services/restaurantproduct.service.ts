import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantProduct } from '../models/restaurantproduct';


@Injectable({
  providedIn: 'root'
})
export class RestaurantproductService {

  private baseUrl='/api';

  constructor(private http:HttpClient) { }

RestaurantProductbyid(id:number):Observable<any>
{
  return this.http.get(`${this.baseUrl}`+'/restaurantproduct/'+id);
}

viewProductList():Observable<any>
{
  return this.http.get(`${this.baseUrl}`+'/restaurantproducts'); 
}

updatePrice(id:number,value:any):Observable<Object>{
  return this.http.put(`${this.baseUrl}`+'/updaterestaurantproduct/'+id,value);
}

del(pid:number):Observable<Object>
{
  return this.http.delete(`${this.baseUrl}`+'/deleterestaurantproduct?id='+pid);
}



addCustomerManager(b:RestaurantProduct)
{
  //alert(b);
  return this.http.post(`${this.baseUrl}`+'/addrestaurant',b);
  //return this.http.post(`${this.baseUrl}`+'/products',product);

}
}
