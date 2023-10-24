import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authority } from '../models/authority';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Authority;
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  checkValidUser(email: string, password: string) 
  {
    return this.http.get(`${this.baseUrl}` + '/authoritylogin?email=' + `${email}` + '&password=' + `${password}`);
  }

  logOutUser() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    sessionStorage.removeItem('currentUser');
  }
}
