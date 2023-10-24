import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from 'src/app/models/authority';
import { ViewProduct } from 'src/app/models/viewproducts';
import { ProductService } from 'src/app/services/product.service';
import { ViewproductsService } from 'src/app/services/viewproducts.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  viewproduct: any = [];
  viewallproduct: any = [];
  restaurantproduct: any = [];
  products: any = [];
  flag: any = { "f": false };
  b1: ViewProduct = new ViewProduct();
  res: any = { "result": false };
  a1: number;
  authority:Authority;
  currentUser: string;
  selectedRProduct:string;


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private viewproductservice: ViewproductsService,private proser:ProductService)
   { }

  ngOnInit(): void {


    this.viewproductservice.viewProductList().subscribe((r) => { this.viewproduct = r;});
    this.authority=JSON.parse(sessionStorage.getItem('currentUser'));
    
    this.a1 = this.authority.restaurant.restaurant_id;
    /*


    this.authority=JSON.parse(sessionStorage.getItem('currentUser'));
    
     this.a1 = this.authority.restaurant.restaurant_id;
     
    this.proser.getProductbyrest(this.a1).subscribe((r) => { this.viewallproduct = r; });
    
    this.proser.getProducts().subscribe((data)=>{this.products=data});

    this.products.forEach((p)=>{
      let flag=false;
      this.viewallproduct.forEach(rs=>{
         if(p.product_id==rs.product.product_id)
         {
            flag=true;
         }
 
      });
      if(flag==false)
      {
        this.viewproduct.push(p);
      }

      
    });*/
    
    
    }
  

  /*insertProduct() { 
    this.viewproductservice.addviewproduct(this.b1).subscribe((r) => { this.viewproduct = r; });
  }*/

  onSelect(rproduct,productid) {

    /*sessionStorage.setItem('currentUser', this.currentUser);
                this.router.navigate(['operation']);*/
    

    /*this.selectedRProduct = JSON.stringify(viewproduct);

    
    sessionStorage.setItem('selectedRProduct', this.selectedRProduct);
    //debugger;
    this.router.navigate(['/update']);*/

    //this.selectedRProduct = JSON.stringify(viewproduct);

    sessionStorage.setItem('selectedRProductId', rproduct);
    sessionStorage.setItem('productid', productid);
    this.router.navigate(['/update']);
  }

}
