import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { identifierModuleUrl } from '@angular/compiler';
import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //product : Product[];
  private baseUrl = '/api';

  constructor(private http:HttpClient) {} 
    

   
   del(b1:Product)
  {
    return this.http.delete(`${this.baseUrl}`+'/removeproduct/'+b1);
  }

  addproduct(b:Product)
  {
    //alert(b);
    return this.http.post(`${this.baseUrl}`+'/addproduct',b);
  }
  
  
}
