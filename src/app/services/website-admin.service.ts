import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { website_admin } from '../models/website-admin';


@Injectable({
  providedIn: 'root'
})
export class WebsiteAdminService {

  websiteadmin:website_admin
  private baseUrl = '/api';

  constructor(private http:HttpClient) { }

  checkValidUser(user_id:string, password : string)
  {
    return this.http.get(`${this.baseUrl}`+'/adminlogin?user_id='+`${user_id}`+'&password='+`${password}`);
  }

 logOutUser() 
  {
    this.websiteadmin = JSON.parse(sessionStorage.getItem('currentUser'));
    sessionStorage.removeItem('currentUser');
  }

}