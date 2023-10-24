import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Feedback } from 'src/app/models/feedback';
import { Orders } from 'src/app/models/orders';
import { FeedbackService } from 'src/app/services/feedback.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-customer-order-history',
  templateUrl: './customer-order-history.component.html',
  styleUrls: ['./customer-order-history.component.css']
})
export class CustomerOrderHistoryComponent implements OnInit {

  id: any;
  currentcustomer: Customer;
  orders: Orders[];
  result: boolean = false;
  feedbacks: Feedback[];
  filteredFeedbacks: Feedback[];
  order: Orders;
  currentRestaurant: string;
  overallRating = 0;
  feedback: Feedback;
  rate: any;
  ul: string;
  constructor(
    private router: Router,
    private ordservice: OrderService,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem("rest_id");
    this.currentcustomer = JSON.parse(sessionStorage.getItem("currentcustomer"));
    this.getFeedbacks();
  }

  getFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe((feedbacks: Feedback[]) => {
      this.feedbacks = feedbacks.sort((a, b) => b.order.order_id - a.order.order_id);
      this.ordservice.getOrdersbycustomer(Number(this.currentcustomer.customer_id)).subscribe((data) => {
        this.orders = data;
        this.result = true;
      });
    });
  }

  url() {
    if (sessionStorage.getItem("rest_id") != null) {
      this.ul = "/products?id=" + this.id;
    }
    else {
      this.ul = "/customer";
    }
  }
  onRestaurantChange(restaurant, order) {
    this.filteredFeedbacks = this.feedbacks.filter((f: any) => f?.restaurant?.restaurant_nm === restaurant && f?.order?.order_id === order);
    return this.filteredFeedbacks[0] ? this.filteredFeedbacks[0].rating : 0;
  }
  onRateChange(rating: number, or: Orders) {
    this.feedback = new Feedback();
    this.feedback.order = or;
    this.feedback.customer = or.customer;
    this.feedback.date = new Date().toJSON();
    this.feedback.rating = rating;
    this.feedback.restaurant = or.restaurant;
    this.feedbackService.putFeedbacks(this.feedback).subscribe(f => {
      this.getFeedbacks();
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["customer"]);
  }
}
