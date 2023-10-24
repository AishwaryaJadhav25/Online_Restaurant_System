import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from 'src/app/models/authority';
import { Restaurant } from 'src/app/models/restaurant';
import { ViewProduct } from 'src/app/models/viewproducts';
import { ProductService } from 'src/app/services/product.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ViewproductsService } from 'src/app/services/viewproducts.service';



@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  a1:number;
  updateproduct:any=[];
  flag:any={"f":false};
  b1:ViewProduct=new ViewProduct();
  res:any={"result":false};
  restaurant: any = [];
  restId:number;
  proId:number;
  authority:Authority;
  viewproduct:ViewProduct;
  products: any = [];
  ourrestaurant:Restaurant=new Restaurant;

  constructor(private viewproductService:ViewproductsService,private restaurantservice: RestaurantService,private proser:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.viewproductService.viewProductList().subscribe((r) => { this.updateproduct = r;  });
    
    this.restaurantservice.getRestaurantList().subscribe((data) => { this.restaurant = data });

    this.proser.getProducts().subscribe((data)=>{this.products=data});

     const selectedId = sessionStorage.getItem('selectedRProductId');
      this.a1 =+selectedId;

      const prodId = sessionStorage.getItem('productid');
      this.proId =+prodId;

       
      this.authority=JSON.parse(sessionStorage.getItem('currentUser'));
      // alert(JSON.stringify(this.authority));
        this.restId = this.authority.restaurant.restaurant_id;
        

  }

  insertProduct(price:number)
  { 
    
      

       for(var rest of this.restaurant)
      {
        if(rest.restaurant_id==this.restId)
        {
          this.b1.restaurant = rest;
         
        }
      }

      for(var pro of this.products)
      {
        
        //if(pro.product_id==emp.product.product_id)
        if(pro.product_id==this.proId)
        {
          this.b1.product = pro;
         
        }
      //debugger;
      this.b1.unit_price=price;
    }
    
    this.viewproductService.addupdateProduct(this.b1).subscribe((r) => {this.updateproduct = r;alert("added!!")});
    this.router.navigate(["operation/restaurantproducts"]);
  }

  

}
