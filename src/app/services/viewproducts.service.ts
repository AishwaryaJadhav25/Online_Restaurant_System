import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewProduct } from '../models/viewproducts';


@Injectable({
  providedIn: 'root'
})
export class ViewproductsService {

  private baseUrl = '/api';

  constructor(private http:HttpClient) { }

  viewProductList():Observable<any>
   {
     return this.http.get(`${this.baseUrl}`+'/restaurantproducts'); 
   }

   
   addupdateProduct(b:ViewProduct)
   {
     //alert(b);
     return this.http.post(`${this.baseUrl}`+'/addrestaurantproduct',b);
     //return this.http.post(`${this.baseUrl}`+'/products',product);
 
   }

   addviewproduct(b:ViewProduct)
  {
    
    return this.http.post(`${this.baseUrl}`+'/addproduct',b);
  }

  updateProduct(pid:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}`+'/products/'+pid,value);
  }
  
  getProductById(pid:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}`+'/products/'+pid);
  }
}
