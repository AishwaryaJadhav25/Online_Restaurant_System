import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.scss']
})
export class UpdateRestaurantComponent implements OnInit {


  str:any;
  rest:any;
  flag:boolean=false;
  show:boolean=false;
  restaurant_id:number;
  res:Restaurant;

  constructor(private updateservice:RestaurantService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void 
   {
      this.restaurant_id=this.route.snapshot.params['rest_id'];
      this.updateservice.getRestaurantList().subscribe((data)=>
      {
        this.rest=data;
      });


      //  this.rest=new Restaurant();
      // this.restaurant_id=this.route.snapshot.params['restaurant_id'];
      // this.updateservice.updatedetails(this.rest,this.restaurant_id,).subscribe((data)=>{console.log(data)
      //   this.rest=data;
      // },
      // error=>console.log(error));


      //this.updateservice.updatedetails(this.rest,this.restaurant_id,).subscribe((data)=>this.rest=data);
   }


    // change(idx:number)
    // {
    //   // this.res=this.rest[idx];
    //   // this.show=true;

    //   this.str=JSON.stringify(idx);
    //   sessionStorage.setItem("restaurant_id",this.str);
    //   this.router.navigate(['restaurantupdate']);
  

    // }

    change(idx:number)
    {
      this.res=this.rest[idx];
      this.show=true;
    }

    Update()
    {       
        this.updateservice.updatedetails(this.res,this.res.restaurant_id).subscribe(()=>
        {
          //console.log(data)
          //this.rest=data;
          this.router.navigate(["restaurantupdate"]);
        });
    } 

    logout() {
      sessionStorage.clear();
      this.router.navigate(["landing"]);
    }
    
  }



