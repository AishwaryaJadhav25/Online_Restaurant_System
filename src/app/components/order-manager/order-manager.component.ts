import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from 'src/app/models/authority';
import { OrderManager } from 'src/app/models/ordermanager';
import { OrdermanagerService } from 'src/app/services/ordermanager.service';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

 // omgr : OrderManager[];
  order:any=[];
  role:any=[];
  flag:any={"f":false};
  b1:OrderManager=new OrderManager();
  res:any={"result":false};
  a1:number;
  authority:Authority;
  restaurant: any = [];

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router,private restaurantservice: RestaurantService,private ordermanagerservice:OrdermanagerService) { 

  }

  ngOnInit(): void
  {
    //debugger;
    this.authority=JSON.parse(sessionStorage.getItem('currentUser'));
    // alert(JSON.stringify(this.authority));
     this.a1 = this.authority.restaurant.restaurant_id;
     //alert(this.a1);
    this.ordermanagerservice.getOrderManager().subscribe((data)=>{this.order=data}); 

    this.ordermanagerservice.getRole().subscribe((data)=>{this.role=data}); 

    this.restaurantservice.getRestaurantList().subscribe((data) => { this.restaurant = data });

  }

  insertOrder()
  {
    for(var emp of this.restaurant)
    {
       if(emp.restaurant_id==this.a1)
         {
           this.b1.restaurant=emp;
           
         }
    }

    for(var emp of this.role)
    {
       if(emp.role_id==3)
         {
           this.b1.role=emp;
           
         }
    }

    this.ordermanagerservice.addOrderManager(this.b1).subscribe((r) => {this.order = r;alert("Registered successfully!!")});
  }



  /*insertOrder(fnm:string,lnm:string,pwd:string,mail:string,cno:string)
  {
    
  
    for(var emp of this.restaurant)
    {
       if(emp.restaurant_id==this.a1)
         {
           this.b1.restaurant=emp;
           
         }
    }

    for(var emp of this.role)
    {
       if(emp.role_id==3)
         {
           this.b1.role=emp;
           
         }
    }
    this.b1.first_nm=fnm;
    this.b1.last_nm=lnm;
    this.b1.password=pwd;
    this.b1.email=mail;
    this.b1.contact_no=cno;
    //this.b1.role_id=3;
    //this.b1.authority_id=this.order.authority_id+1;//should be autoincremented
    //debugger;
    this.ordermanagerservice.addOrderManager(this.b1).subscribe((r) => {this.order = r;alert("Registered successfully!!")});
    //this.ordermanagerservice.addOrderManager(this.b1).subscribe((r) => {this.order = r;alert(this.res.result)});
    //this.omgr.push(a);
  }*/

  deleteOrder(b1:number)
  {
    this.ordermanagerservice.del(b1).subscribe((f1)=>{this.flag=f1;alert("OrderManager Deleted!!!")});
    
  }

  reset()
  {
    this.order.result=false;
  }

 

}
