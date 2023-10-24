import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restmgr } from '../models/restmgr';
//import { Restaurant} from '../../Restaurant/restaurant.service'


@Injectable({
  providedIn: 'root'
})
export class RestsvcService {

  restmgr : Restmgr; 
  private baseUrl = '/api';


  constructor(private http:HttpClient) { }

  checkValidUser(email:string, password : string){
    return this.http.get(`${this.baseUrl}`+'/login?email='+`${email}`+'&password='+`${password}`);

   /* logOutUser()
     {
      this.restmgr = JSON.parse(sessionStorage.getItem('currentUser'));
      sessionStorage.removeItem('currentUser');
    }*/
  
  
  }
}
