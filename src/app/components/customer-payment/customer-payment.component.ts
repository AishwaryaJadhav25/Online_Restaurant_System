import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerUpdateService } from 'src/app/services/customer-update.service';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css']
})
export class CustomerPaymentComponent implements OnInit {

  currentcustomer:any;
  cart:any[]=[];
  qnt:any[]=[];
  amount:any[]=[];
  payment_mode:number;
  total:number=0;
  flag:boolean=false;
  id:any;
  confirm=false;
  add=false;
  constructor(private http: HttpClient, private router: Router,private route:ActivatedRoute,private custservice:CustomerUpdateService) { }

  ngOnInit(): void 
  {
    this.id=sessionStorage.getItem("rest_id");
    this.currentcustomer=JSON.parse(sessionStorage.getItem("currentcustomer"));
    this.cart=JSON.parse(sessionStorage.getItem("currentcart"));
    this.qnt=JSON.parse(sessionStorage.getItem("currentqnt"));
    let date=new Date().toJSON();
    for (let key in this.cart) 
    {
      if (this.cart.hasOwnProperty(key)) 
      {
        this.amount[key]=(this.cart[key].unit_price)*(this.qnt[key]);
      }
    }
    //alert(this.amount);
    for (let key in this.amount) 
    {
      if (this.amount.hasOwnProperty(key)) 
      {
        this.total=this.total+this.amount[key];
      }
    }
    //alert(this.total);
  }

  smode(value:any)
  {
    //alert(value);
    this.payment_mode=value;
    if(value==1)
    {
      this.flag=true;
    }
    else
    {
      this.flag=false; 
    }
    this.confirm=true;
  }

  edit()
  {
    this.add=true;
    alert(JSON.stringify(this.currentcustomer));
    this.custservice.updateCustomer(this.currentcustomer.customer_id,this.currentcustomer).subscribe();
    sessionStorage.setItem("currentcustomer",JSON.stringify(this.currentcustomer));
  }
  noedit()
  {
    this.add=true;
  }
  pay()
  {
    sessionStorage.setItem("bill",JSON.stringify(this.amount));
    sessionStorage.setItem("total",JSON.stringify(this.total));
    sessionStorage.setItem("mode",JSON.stringify(this.payment_mode));
    this.router.navigate(["order"]);
  }
  cancle()
  {
    this.router.navigate(["customer"]);
  }
  logout()
  {
      sessionStorage.clear();
      this.router.navigate(["customer"]);
  }
}
