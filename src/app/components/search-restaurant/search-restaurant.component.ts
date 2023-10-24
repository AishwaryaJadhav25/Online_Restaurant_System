import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.scss']
})
export class SearchRestaurantComponent implements OnInit {
rest:any;
searchTerm:string;
  constructor(private searchservice:RestaurantService,private router:Router) { }

  ngOnInit(): void 
  {
    this.searchservice.getRestaurantList().subscribe((data)=>{this.rest=data})
    if(this.router.navigated)
    {
      this.searchservice.getRestaurantList().subscribe((data)=>this.rest=data)
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["landing"]);
  }

}
