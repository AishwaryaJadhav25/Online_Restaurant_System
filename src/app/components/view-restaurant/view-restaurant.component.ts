import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';



@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.scss']
})
export class ViewRestaurantComponent implements OnInit {

  
rest:any;

  constructor(private viewservice:RestaurantService,private router:Router) {   }

  ngOnInit(): void {

    this.viewservice.getRestaurantList().subscribe((data)=>this.rest=data)
    
    if(this.router.navigated)
    {
      this.viewservice.getRestaurantList().subscribe((data)=>this.rest=data)
    }

  }


  logout() {
    sessionStorage.clear();
    this.router.navigate(["landing"]);
  }


}