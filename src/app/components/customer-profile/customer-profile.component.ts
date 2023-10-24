import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerUpdateService } from 'src/app/services/customer-update.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  id:any;
  currentcustomer:Customer;
  login:boolean=false;
  flag:boolean=false;
  profileForm : FormGroup;
  submitted:boolean=false;
  constructor(private http: HttpClient, private router: Router,private route:ActivatedRoute,private custservice:CustomerUpdateService,private formBuilder:FormBuilder) 
  {
    this.profileForm=new FormGroup({
      fname:new FormControl(),
      lname:new FormControl(),
      contact :new FormControl(),
      email :new FormControl(),
      address :new FormControl(),
    });
  }

  ngOnInit(): void 
  {
    this.id=sessionStorage.getItem("rest_id");
    this.currentcustomer=JSON.parse(sessionStorage.getItem("currentcustomer"));
    if (this.currentcustomer.customer_id != 0) 
    {
      this.login = true;
    }
   
  }

  get f() { return this.profileForm.controls; }

  set()
  {
    this.flag=true;
  }

  update()
  {
    this.profileForm=this.formBuilder.group({ 
      fname:[this.currentcustomer.first_nm,[Validators.required]], 
      lname:[this.currentcustomer.last_nm,[Validators.required]],
      contact:[this.currentcustomer.contact,[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email:[this.currentcustomer.email,[Validators.required, Validators.email]],
      address:[this.currentcustomer.address,[Validators.required]],
     });
    this.submitted=true;
    if(this.profileForm.valid==true)
    {
        this.registerCustomer();
    }
     
  }
  registerCustomer()
  {
     this.custservice.updateCustomer(this.currentcustomer.customer_id,this.currentcustomer).subscribe(()=>{alert("Details updated")}); 
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(["customer"]);
  }
}
