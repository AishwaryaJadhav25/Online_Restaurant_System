import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from 'src/app/models/authority';
import { Customer } from 'src/app/models/customer';
import { CustomermanagerService } from 'src/app/services/customermanager.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { CustomerManager } from '../../models/customermanager';


@Component({
  selector: 'app-restaurant-manager',
  templateUrl: './restaurant-manager.component.html',
  styleUrls: ['./restaurant-manager.component.css']
})
export class RestaurantManagerComponent implements OnInit {

  //mgr : CustomerManager[];
  customer: any = [];
  role: any = [];
  restaurant: any = [];
  authority:Authority;
  flag: any = { "f": false };
  b1: CustomerManager = new CustomerManager();
  res: any = { "result": false };
  a1: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router,private restaurantservice: RestaurantService, private customermanagerservice: CustomermanagerService) {

  }

  ngOnInit(): void {
    this.authority=JSON.parse(sessionStorage.getItem('currentUser'));
   // alert(JSON.stringify(this.authority));
    this.a1 = this.authority.restaurant.restaurant_id;
   // alert(this.a1);
    this.customermanagerservice.getCustomerManager().subscribe((data) => {
      this.customer = data.filter(d => d?.role?.role_id === 2 &&
        d?.restaurant?.restaurant_id === this.a1);
      console.table(this.customer);
    });


    this.customermanagerservice.getRole().subscribe((data)=>{this.role=data}); 

    this.restaurantservice.getRestaurantList().subscribe((data) => { this.restaurant = data });

  }

  insertCustomer()
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
       if(emp.role_id==2)
         {
           this.b1.role=emp;
           
         }
    }

    this.customermanagerservice.addCustomerManager(this.b1).subscribe((r) => { this.customer = r ;alert("Registered successfully!!")});
  }

  

  deleteCustomer(b1: number) {
    this.customermanagerservice.del(b1).subscribe((f1) => { this.flag = f1;alert("deleted") });

  }

  reset() {
    this.customer.result = false;
  }

}
