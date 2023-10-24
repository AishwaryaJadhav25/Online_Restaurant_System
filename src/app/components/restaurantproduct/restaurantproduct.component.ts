import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from 'src/app/models/authority';
import { RestaurantProduct } from 'src/app/models/restaurantproduct';
import { ProductService } from 'src/app/services/product.service';
import { RestaurantproductService } from 'src/app/services/restaurantproduct.service';


@Component({
  selector: 'app-restaurantproduct',
  templateUrl: './restaurantproduct.component.html',
  styleUrls: ['./restaurantproduct.component.css']
})
export class RestaurantproductComponent implements OnInit {

  restaurantproduct: any = [];
  filteredrproduct: any = [];
  products:any=[];
  flag: any = { "f": false };
  b1: RestaurantProduct = new RestaurantProduct();
  res: any = { "result": false };
  a1: number;
  authority:Authority;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private restaurantproductservice: RestaurantproductService,private proser:ProductService) { }

  ngOnInit(): void {
    
    
    this.authority=JSON.parse(sessionStorage.getItem('currentUser'));
    // alert(JSON.stringify(this.authority));
     this.a1 = this.authority.restaurant.restaurant_id;
     //this.proser.getProducts().subscribe((data)=>{this.products=data});
    this.proser.getProductbyrest(this.a1).subscribe((r) => { this.restaurantproduct = r; });
   // this.filteredrproduct=this.products

  }

  insertProduct() { 
    this.restaurantproductservice.updatePrice(this.b1.r_product_id,this.b1).subscribe((r) => { this.restaurantproduct = r; alert(this.restaurantproduct.result) });
  }

  onSelect(rproduct:any) 
  {
    sessionStorage.setItem('selectedRProductId', rproduct);
    this.router.navigate(['/updateprice']);
  }

  deleteOrder(id:number)
  {
    //alert(id);
    this.restaurantproductservice.del(id).subscribe((r) => { this.restaurantproduct = r; });
    //this.router.navigate(["operation/restaurantproducts"]);
  }

}
