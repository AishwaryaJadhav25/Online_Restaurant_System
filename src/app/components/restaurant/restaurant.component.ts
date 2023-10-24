import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurant: any = [];
  flag: any = { "f": false };
  b1: Restaurant = new Restaurant();
  res: any = { "result": false };


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private restaurantservice: RestaurantService) { }

  ngOnInit(): void {

    //this.reloadRestaurantList();
    this.restaurantservice.getRestaurantList().subscribe((data) => { this.restaurant = data });
  }

  insertCustomer() {
  
    this.restaurantservice.addCustomerManager(this.b1).subscribe((r) => { this.restaurant = r });
   
  }

  deleteCustomer(b1: Restaurant) {
    this.restaurantservice.del(b1).subscribe((f1) => { this.flag = f1; alert("Customermanager Deleted!!!") });
   
  }

  reset() {
    this.restaurant.result = false;
  }

  onSelect(restaurant) {
    sessionStorage.setItem('selectedRestaurantId', restaurant);
    this.router.navigate(['/login']);
  }





}
