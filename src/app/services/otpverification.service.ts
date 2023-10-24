import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Otp } from '../models/Otp';


@Injectable({
  providedIn: 'root'
})
export class OtpverificationService {

  private baseUrl = '/api';


  constructor(private http:HttpClient) { }
  getOtp(email:string):Observable<Otp>
  {
    return this.http.get<Otp>(`${this.baseUrl}`+'/forgotpassword/'+email);
  }

  resetpassword(email:string,pass:string)
  {
    return this.http.get(`${this.baseUrl}`+'/resetpassword?email='+email+"&pass="+pass);
  }

  getauthorityOtp(email:string):Observable<Otp>
  {
    return this.http.get<Otp>(`${this.baseUrl}`+'/forgotauthoritypassword/'+email);
  }

  resetauthoritypassword(email:string,pass:string)
  {
    return this.http.get(`${this.baseUrl}`+'/resetauthoritypassword?email='+email+"&pass="+pass);
  }
}
