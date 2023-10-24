import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { RestaurantProduct } from 'src/app/models/restaurantproduct';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vegproduct',
  templateUrl: './vegproduct.component.html',
  styleUrls: ['./vegproduct.component.css']
})
export class VegproductComponent implements OnInit {

  vegproducts:any;
  id:any;
  //quantity:number;
  cart:any=[];
  qnt:any=[];
  currentcustomer:Customer;
  login:boolean=false;
  flag:boolean=false;
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router,private proservice:ProductService) 
  { 
    
   }

  ngOnInit(): void 
  {
    //this.route.queryParams.subscribe((params) => {this.id=params.id});
    this.id=sessionStorage.getItem("rest_id");
    this.proservice.getvegProduct().subscribe((data)=>{this.vegproducts=data}); 
    this.currentcustomer=JSON.parse(sessionStorage.getItem("currentcustomer"));
    if(this.currentcustomer.customer_id!=0)
    {
        this.login=true;
    }
  }

  addItem(rs:RestaurantProduct,qnty:any)
  {  
    //this.quantity=qnty;
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
      sessionStorage.setItem("vegcart",JSON.stringify(this.cart));
      sessionStorage.setItem("vqntcart",JSON.stringify(this.qnt));
      this.successMsg();
      //alert(this.qnt);
    }
    else
    {
      this.router.navigate(['customerlogin']);
    }
    //alert(sessionStorage.getItem("vegcart"));
  }
  successMsg()
  {
    Swal.fire("Done!","Added to cart","success");
  }
  logout()
  {
      sessionStorage.clear();
      this.router.navigate(["customer"]);
  }
}
