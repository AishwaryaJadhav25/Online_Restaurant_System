import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerLoginService } from 'src/app/services/customer-login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  loginForm: FormGroup;
  user: any;
  currentcustomer: string;
  msg=false;
  submitted:boolean=false;

  constructor(private http: HttpClient, private router: Router, private custService: CustomerLoginService, private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() 
  {
    this.loginForm = this.formBuilder.group({  
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]], });
  }
  ErrorAlert(){
    Swal.fire('Wrong email and passowrd');
  }
  
  successAlert(){
    Swal.fire('Welcome', 'Login successful', 'success');
  }

  get f() { return this.loginForm.controls; }

  onSubmit() 
  {
    this.submitted=true;
    if(this.loginForm.valid==true)
    {
        this.checkLogin();
    }
  }

  checkLogin() 
  {
    this.custService.checkValidUser(this.loginForm.value.email, this.loginForm.value.password).subscribe
      ((data: Customer) => {
        this.user = data;
        if (this.user.customer_id !== 0) 
        {
            this.currentcustomer = JSON.stringify(this.user);
            if(this.user.password==this.loginForm.value.password)
            {
              this.msg=false;
              sessionStorage.setItem('currentcustomer', this.currentcustomer);
              this.successAlert();
              this.router.navigate(['customer']);
            }
            else 
            {
              this.ErrorAlert();
              //this.router.navigate(['customerlogin']);
            }         
        }
        else 
        {
          this.ErrorAlert();
          //this.router.navigate(['customerlogin']);
        }
        
      },
        error => console.error(error)
      );
  }

}
