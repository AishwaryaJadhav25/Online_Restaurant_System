import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerUpdateService } from 'src/app/services/customer-update.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  registerForm : FormGroup;
  customer : Customer = new Customer();
  res=false;
  submitted:boolean=false;

  constructor(private http:HttpClient, private route :Router, private customerService: CustomerUpdateService, private formBuilder:FormBuilder) {
    this.registerForm=new FormGroup({
      fname:new FormControl(),
      lname:new FormControl(),
      contact :new FormControl(),
      email :new FormControl(),
      password: new FormControl(),
      address :new FormControl(),
    });
   }

  ngOnInit(): void 
  {
    this.registerForm=this.formBuilder.group({ 
      fname:['',[Validators.required]], 
      lname:['',[Validators.required]],
      contact:['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],//, Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[@$!%*#?&_]).{6,}$')]],
      address:['',[Validators.required]],
     });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() 
  {
    this.submitted=true;
    if(this.registerForm.valid==true)
    {
        this.registerCustomer();
    }
  }


  onReset() 
  {
    this.submitted = false;
    this.res=false;
    this.registerForm.reset();
  }

  registerCustomer()
  {
     this.customer.first_nm=this.registerForm.value.fname;
     this.customer.last_nm=this.registerForm.value.lname;
     this.customer.contact=this.registerForm.value.contact; 
     this.customer.email=this.registerForm.value.email;     
     this.customer.password=this.registerForm.value.password;
     this.customer.address=this.registerForm.value.address;
     this.customerService.registerCustomer(this.customer).subscribe(()=>{this.res=true});
     setTimeout(()=>this.route.navigate(["customerlogin"]),700);
  }


}
