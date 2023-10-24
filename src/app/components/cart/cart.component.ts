import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { RestaurantProduct } from 'src/app/models/restaurantproduct';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  id: any;
  currentcustomer: Customer;
  allcart: any[];
  allqnt: any[];
  qnt: any;
  vqnt: any;
  nqnt: any;
  cart: any[] = [];
  vegcart: any[] = [];
  nonvegcart: any[] = [];
  empty: boolean = true;
  flag: boolean = false;
  url:any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void 
  {
    this.route.queryParams.subscribe((params) => { this.id = params.id });
    this.id = sessionStorage.getItem("rest_id");
    this.currentcustomer = JSON.parse(sessionStorage.getItem("currentcustomer"));
    if (sessionStorage.getItem("currentcart") !== undefined || sessionStorage.getItem("currentcart") !== null) 
    {
      this.allcart = JSON.parse(sessionStorage.getItem("currentcart"));
    }
    if (sessionStorage.getItem("currentqnt") !== undefined || sessionStorage.getItem("currentqnt") !== null) 
    {
      this.allqnt = JSON.parse(sessionStorage.getItem("currentqnt"));
    }
    this.cart = JSON.parse(sessionStorage.getItem("cart"));
    this.vegcart = JSON.parse(sessionStorage.getItem("vegcart"));
    this.nonvegcart = JSON.parse(sessionStorage.getItem("nonvegcart"));
    this.qnt = JSON.parse(sessionStorage.getItem("qntcart"));
    this.vqnt = JSON.parse(sessionStorage.getItem("vqntcart"));
    this.nqnt = JSON.parse(sessionStorage.getItem("nqntcart"));
   
    if (this.cart !== null) {

      if (this.allcart !== null) 
      {
          this.cart.forEach((c,i) => {
          this.allcart.forEach((ac, j) => {
            if (ac?.r_product_id === c?.r_product_id) 
            {
              this.allqnt[j] =Number(this.allqnt[j])+Number(this.qnt[i]);
              this.cart.splice(i,1);
              this.qnt.splice(i,1);
            } 
          });
        });
        
        this.allcart.push(...this.cart);
        this.allqnt.push(...this.qnt);
        
      }
      else {
        this.allcart = (this.cart);
        this.allqnt = (this.qnt);
      }

    }


    if (this.vegcart !== null) {
      if (this.allcart !== null) 
      {
        this.vegcart.forEach((c,i) => {
          this.allcart.forEach((ac, j) => {
            if (ac?.r_product_id === c?.r_product_id) 
            {
              this.allqnt[j] =Number(this.allqnt[j])+Number(this.vqnt[i]);
              this.vegcart.splice(i,1);
              this.vqnt.splice(i,1);
            } 
          });
        });
        
        this.allcart.push(...this.vegcart);
        this.allqnt.push(...this.vqnt);
      }
      else 
      {
        this.allcart = (this.vegcart);
        this.allqnt = (this.vqnt);
      }
    }


    if (this.nonvegcart !== null) {
      if (this.allcart !== null) 
      {
        this.nonvegcart.forEach((c,i) => {
          this.allcart.forEach((ac, j) => {
            if (ac?.r_product_id === c?.r_product_id) 
            {
              this.allqnt[j] =Number(this.allqnt[j])+Number(this.nqnt[i]);
              this.nonvegcart.splice(i,1);
              this.nqnt.splice(i,1);
            } 
          });
        });
        
        this.allcart.push(...this.nonvegcart);
        this.allqnt.push(...this.nqnt);
      }
      else {
        this.allcart = (this.nonvegcart);
        this.allqnt = (this.nqnt);
      }
    }

    if (this.allcart != null) {
      this.empty = false;
    }

    sessionStorage.setItem("currentcart", JSON.stringify(this.allcart));
    sessionStorage.setItem("currentqnt", JSON.stringify(this.allqnt));
    sessionStorage.removeItem("cart");
    sessionStorage.removeItem("vegcart");
    sessionStorage.removeItem("nonvegcart");
    sessionStorage.removeItem("qntcart");
    sessionStorage.removeItem("vqntvegcart");
    sessionStorage.removeItem("nqntcart");
 
  }

  goto()
  {
    if(sessionStorage.getItem("rest_id")==null)
    {
      this.url="/customer";
    }
    else
    {
      this.url="/products?id="+this.id;
    }
  }

  remove(idx: number) 
  {
    this.allcart.splice(idx, 1);
    this.allqnt.splice(idx, 1);
    if(this.allcart.length===0)
    {
      this.empty = true;
      this.router.navigate(["cart"]);
    }
    sessionStorage.setItem("currentcart", JSON.stringify(this.allcart));
    sessionStorage.setItem("currentqnt", JSON.stringify(this.allqnt));
    this.router.navigate(["/cart?id=" + this.id]);
  }

  placeorder() {
    sessionStorage.setItem("currentcart", JSON.stringify(this.allcart));
    sessionStorage.setItem("currentqnt", JSON.stringify(this.allqnt));
    this.router.navigate(["payment"]);
  }

  logout()
  {
      sessionStorage.clear();
  }
}
