import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantproductService } from 'src/app/services/restaurantproduct.service';


@Component({
  selector: 'app-updateprice',
  templateUrl: './updateprice.component.html',
  styleUrls: ['./updateprice.component.css']
})
export class UpdatepriceComponent implements OnInit {


  a1:number;
  //updateproduct:any=[];
  flag:any={"f":false};
  b1:any;
  res:any={"result":false};

  constructor(private restaurantproductService:RestaurantproductService,private router:Router,private route:ActivatedRoute) 
  { }

  ngOnInit(): void {

    
    
     this.a1 = JSON.parse(sessionStorage.getItem('selectedRProductId'));
     // alert(this.a1);
      this.restaurantproductService.RestaurantProductbyid(this.a1).subscribe((r) => { this.b1 = r;});
    
  }

  updateprice(price:number)
  { 
       
    this.b1.unit_price=price;
    this.restaurantproductService.updatePrice(this.b1.r_product_id,this.b1).subscribe(()=>{alert("Product price updated")});
    this.router.navigate(["operation/restaurantproducts"]);
  }

}
