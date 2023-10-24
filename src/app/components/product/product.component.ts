import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = [];
  flag: any = { "f": false };
  b1: Product = new Product();
  res: any = { "result": false };
  a1:number;



  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private productservice: ProductService) {

  }

  ngOnInit(): void {
    /*debugger;
    this.productservice.getProductList().subscribe((data) => {
      const selectedId = sessionStorage.getItem('selectedRestaurantId')
      if (selectedId) {
        //this.product = data.filter(d => d?.restaurant?.restaurant_id === selectedId)
      } else {
        this.product = data;
      }
    });*/

    
  }


  deleteProduct(b1: Product) {
    this.productservice.del(b1).subscribe((f1) => { this.flag = f1; alert("Product Deleted!!!") });
    //this.bookser.getbooks().subscribe((data)=>this.books=data);
    //this.router.navigate(['list']);
    //this.books.splice(idx,1);
  }


  insertProduct(pnm:string,cat:string,scat:string,desc:string) {
    //alert(eid+":"+dept);
    //let a:Product = new Product(id,nm,cat,scat,pdesc);
    //this.productservice.addproduct(this.b1).subscribe((r) => { this.product = r; alert(this.product.result) });
    //this.product.push(a);

    for(var emp of this.product)
    {
       if(emp.restaurant.restaurant_id==this.a1)
         {
           this.b1=emp;
         }
    }
    this.b1.product_nm=pnm;
    this.b1.category=cat;
    this.b1.subcategory=scat;
    this.b1.product_desc=desc;
    
    this.b1.product_id=this.product.product_id+1;//should be autoincremented
    this.productservice.addproduct(this.b1).subscribe((r) => {this.product = r});

  }
  reset() {
    this.product.result = false;
  }

  /*

  updateProduct(idx,newsal)
  {
    this.product[idx].category = newsal;
  }*/

}
