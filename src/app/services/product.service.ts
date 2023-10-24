import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }

getProductList():Observable<any>
{
  var id=sessionStorage.getItem("rest_id");
  return this.http.get(`${this.baseUrl}`+'/restaurantproductbyrestoid?rest_id='+id);
}

getProductbyrest(id:number):Observable<any>
{
  return this.http.get(`${this.baseUrl}`+'/restaurantproductbyrestoid?rest_id='+id);
}

getProducts():Observable<any>
{
     
   return this.http.get(`${this.baseUrl}`+'/products'); 

}

getvegProduct():Observable<any>
{
  var id=sessionStorage.getItem("rest_id");
  return this.http.get(`${this.baseUrl}`+'/restaurantproductbyvegcat?rest_id='+id);
}

getnonvegProduct():Observable<any>
{
  var id=sessionStorage.getItem("rest_id");
  return this.http.get(`${this.baseUrl}`+'/restaurantproductbynonveg?rest_id='+id);
}
// createProduct(product:Object):Observable<Object>{
//   return this.http.post(`${this.baseUrl}`+'/products',product);
// }
// deleteProduct(pid:number):Observable<any>{
//   return this.http.delete(`${this.baseUrl}`+'/products/'+pid);
// }
// updateProduct(pid:number,value:any):Observable<Object>{
//   return this.http.put(`${this.baseUrl}`+'/products/'+pid,value);
// }
// getProductById(pid:number):Observable<Object>{
//   return this.http.get(`${this.baseUrl}`+'/products/'+pid);
// }



}
