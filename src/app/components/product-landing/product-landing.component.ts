import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { RestaurantProduct } from 'src/app/models/restaurantproduct';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { __await } from 'tslib';

@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.css']
})
export class ProductLandingComponent implements OnInit {

  id: any;
  restaurantproducts:any;
  cart: any = [];
  qnt: any = [];
  currentcustomer: Customer;
  login: boolean = false;
  flag:boolean=false;
  quantity:any;
  maincart:any=[];
  mainqnt:any=[];
  rest_nm:any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private proservice: ProductService) {

  }

  ngOnInit(): void 
  {
    this.route.queryParams.subscribe((params) => { this.id = params.id });
    sessionStorage.setItem("rest_id", this.id);
    this.proservice.getProductList().subscribe((data) => { this.restaurantproducts = data });
    this.currentcustomer = JSON.parse(sessionStorage.getItem("currentcustomer"));
    this.maincart=JSON.parse(sessionStorage.getItem("currentcart"));
    this.mainqnt=JSON.parse(sessionStorage.getItem("currentqnt"));
    //this.rest_nm=this.restaurantproducts[0].restaurant.restaurant_id;
    if(this.currentcustomer!=null&&this.currentcustomer.customer_id!=0)
    {
      this.login = true;
    }

  }
  addItem(rs:RestaurantProduct,qnty:any)
  {  
    qnty ? '' : qnty = "1";
    let i=0;
    if(this.login)
    {
      this.cart.forEach(ele => { 
        
        if(ele==rs)
        {
          this.qnt[i]++; 
          this.flag=true;
        }
        else
        {
          i++;
        }       
      }); 
      if(!this.flag)
      {
        this.cart.push(rs);
        this.qnt.push(qnty);
      }
    sessionStorage.setItem("cart",JSON.stringify(this.cart));
    sessionStorage.setItem("qntcart",JSON.stringify(this.qnt));
    sessionStorage.setItem("currentcart",JSON.stringify(this.maincart));
    sessionStorage.setItem("currentqnt",JSON.stringify(this.mainqnt));
    this.successMsg();
    }
    else
    {
      this.router.navigate(['customerlogin']);
    }
   
  }

  successMsg()
  {
    Swal.fire("Done!","Added to cart","success");
  }
  logout()
  {
      sessionStorage.clear();
  }

}
