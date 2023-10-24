import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Feedback } from 'src/app/models/feedback';
import { Restaurant } from 'src/app/models/restaurant';
import { FeedbackService } from 'src/app/services/feedback.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UtilitiesService } from 'src/app/services/utilities.service';


@Component({
  selector: 'app-customer-relationship-landing',
  templateUrl: './customer-relationship-landing.component.html',
  styleUrls: ['./customer-relationship-landing.component.scss']
})
export class CustomerRelationshipLandingComponent implements OnInit {

  feedbacks: Feedback[];
  filteredFeedbacks: Feedback[];
  restaurants: Restaurant[];
  searchString = '';
  currentRestaurant: string;
  overallRating = 0;
  currentcustomer: Customer;

  constructor(private feedbackService: FeedbackService,
    private RestaurantService: RestaurantService,
    private utiliteService: UtilitiesService,
    private router: Router) { }

  ngOnInit() {
    this.currentcustomer = JSON.parse(sessionStorage.getItem("currentUser"));
    if (this.currentcustomer) {
      this.RestaurantService.getRestaurantList().subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
        this.currentRestaurant = this.restaurants[0].restaurant_nm;
        this.getFeedbacks();
      })
    } else {
      this.router.navigate(["/"]);
    }
  }

  getFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe((feedbacks: Feedback[]) => {
      this.feedbacks = feedbacks.sort((a, b) => b.order.order_id - a.order.order_id);
      this.onRestaurantChange(this.currentRestaurant);
    });
  }

  onRestaurantChange(restaurant) {
    this.filteredFeedbacks = this.feedbacks.filter((f: any) => f?.restaurant?.restaurant_nm === restaurant);
    const rating = 0;
    this.overallRating = 0;
    this.filteredFeedbacks.forEach(ff => {
      this.overallRating += Number((ff.rating / this.filteredFeedbacks.length).toFixed(2));
    });
  }

  generateReport() {
    let data = [];
    this.filteredFeedbacks.map(ff => {
      data.push(this.utiliteService.deserializeObject(ff));
    });
    this.utiliteService.generateReport(data, `Report_${this.currentRestaurant}_${new Date().toString()}`);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

}
