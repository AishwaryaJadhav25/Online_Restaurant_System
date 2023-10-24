import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Feedback } from 'src/app/models/feedback';
import { OrderDetails } from 'src/app/models/orderdetail';
import { Orders } from 'src/app/models/orders';
import { Restaurant } from 'src/app/models/restaurant';
import { FeedbackService } from 'src/app/services/feedback.service';
import { OrderService } from 'src/app/services/order.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-customer-landing',
  templateUrl: './customer-landing.component.html',
  styleUrls: ['./customer-landing.component.css']
})
export class CustomerLandingComponent implements OnInit {

  restaurants: any;
  currentcustomer: Customer;
  login: boolean = false;
  orderdetail: OrderDetails[] = [];
  feedbacks: Feedback[];
  filteredFeedbacks: Feedback[];
  order: Orders;
  currentRestaurant: string;
  overallRating = 0;


  constructor(private http: HttpClient, private router: Router, private restoservice: RestaurantService, private ordservice: OrderService, private feedbackService: FeedbackService) {

  }

  ngOnInit(): void {
      this.restoservice.getRestaurantList().subscribe((data) => {
      this.restaurants = data;
      this.currentRestaurant = this.restaurants[0].restaurant_nm;
      this.getFeedbacks();
    });
    this.currentcustomer = JSON.parse(sessionStorage.getItem("currentcustomer"));
    if (this.currentcustomer != null && this.currentcustomer.customer_id != 0) {
      this.login = true;
    }
    if (this.router.navigated) 
    {
      
        
      // if (sessionStorage.getItem("order") != null) 
      // {
      //   this.order = new Orders();
      //   //this.order = JSON.parse(sessionStorage.getItem("order"));
      //   this.orderdetail = JSON.parse(sessionStorage.getItem("orderdetails"));
      //   for (let key in this.orderdetail) 
      //   {
      //     this.orderdetail[key].order.order_id = this.orid;
      //   }
      //   alert(this.orderdetail);
      //   // this.ordservice.putOrder(this.order).subscribe((data)=>{
      //   //   this.order=data;
      //   // }); 
      //   //this.ordservice. putOrderDetail(this.orderdetail).subscribe();
      //   // sessionStorage.removeItem("order");
      //   // sessionStorage.renmoveItem("orderdetails")
      // }
    }

  }

  getFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe((feedbacks: Feedback[]) => {
      this.feedbacks = feedbacks.sort((a, b) => b.order.order_id - a.order.order_id);
      this.onRestaurantChange(this.currentRestaurant);
    });
  }

  onRestaurantChange(restaurant):number {
    this.filteredFeedbacks = this.feedbacks?.filter((f: any) => f?.restaurant?.restaurant_nm === restaurant);
    let rating = 0
    this.filteredFeedbacks?.forEach(ff => {
      rating += Number((ff.rating / this.filteredFeedbacks.length).toFixed(0));
    });
    return rating;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["customer"]);
  }

}
