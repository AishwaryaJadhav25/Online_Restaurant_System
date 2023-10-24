import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.scss']
})
export class DeleteRestaurantComponent implements OnInit {
  
  //rest:restaurant[];
  rest:any;
  flag:any={"f":false};
  constructor(private deleteservice:RestaurantService,private router:Router) { }

  ngOnInit(): void 
  {
    this.deleteservice.getRestaurantList().subscribe((data)=>
    {
      this.rest=data;
    });
  }
  delete(b1:Restaurant)
  {
    this.deleteservice.del(b1).subscribe((f1)=>{this.flag=f1;});
    this.router.navigate(["delete"]);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["landing"]);
  }

}
