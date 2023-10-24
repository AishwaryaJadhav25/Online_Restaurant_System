import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { OrderDetails } from 'src/app/models/orderdetail';
import { Orders } from 'src/app/models/orders';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantProduct } from 'src/app/models/restaurantproduct';
import { Status } from 'src/app/models/status';
import { CustomerUpdateService } from 'src/app/services/customer-update.service';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-ord',
  templateUrl: './customer-ord.component.html',
  styleUrls: ['./customer-ord.component.css']
})
export class CustomerOrdComponent implements OnInit {

 
  id:any;
  currentcustomer:Customer;
  cart:any=[];
  qnt:any=[];
  order:Orders=new Orders();
  sts:Status=new Status();
  restaurant:Restaurant=new Restaurant();
  orderdetail:OrderDetails[]=[];
  amount:any[]=[];
  rs:RestaurantProduct;
  result:boolean=false;
  result1:boolean=false;
  constructor(private http: HttpClient, private router: Router,private route:ActivatedRoute,private ordservice:OrderService,private custservice:CustomerUpdateService) 
  {
    
  }

  ngOnInit(): void 
  {
    //this.route.queryParams.subscribe((params) => {this.id=params.id});
    this.id=sessionStorage.getItem("rest_id");
    this.currentcustomer=JSON.parse(sessionStorage.getItem("currentcustomer"));
    this.cart=JSON.parse(sessionStorage.getItem("currentcart"));
    this.qnt=JSON.parse(sessionStorage.getItem("currentqnt"));
    this.amount=JSON.parse(sessionStorage.getItem("bill"));
    let date=new Date().toJSON();
    if(!sessionStorage.getItem("mode"))
    {
      this.order.payment_mode="cash on delivery";
      this.order.payment_status="pending";
    }
    else
    {
      this.order.payment_mode="online payment";
      this.order.payment_status="completed";
    }
    
    this.order.date=date;
    this.order.customer=this.currentcustomer;
    this.sts.status_id=1;
    this.sts.status_name="placed";
    this.order.status=this.sts;
    this.restaurant=this.cart[0].restaurant;
    this.order.restaurant=this.restaurant;
    //alert(JSON.stringify(this.order.restaurant));
    this.order.total_amount=JSON.parse(sessionStorage.getItem("total"));
    this.ordservice.putOrder(this.order).subscribe((data)=>
    {
        this.order=data;
        for (let key in this.cart) 
        {
            if (this.cart.hasOwnProperty(key)) 
            {
                this.orderdetail[key]=new OrderDetails();
                this.orderdetail[key].rs=this.cart[key];
                this.orderdetail[key].amount=this.amount[key];
                this.orderdetail[key].quantity=this.qnt[key];
                this.orderdetail[key].order=this.order;
            }      
        }
        this.ordservice.putOrderDetail(this.orderdetail).subscribe(()=>{this.result=true;});
       // sessionStorage.setItem("order",JSON.stringify(this.order));
    }); 
    
    // sessionStorage.setItem("orderdetails",JSON.stringify(this.orderdetail));
    //alert(JSON.stringify(this.order));
    
  }
  edit()
  {
    this.result=true;
  }
  confirm()
  {
      sessionStorage.setItem("currentcustomer",JSON.stringify(this.currentcustomer));
      //alert(JSON.stringify(this.currentcustomer)); 
      this.custservice.updateCustomer(this.currentcustomer.customer_id,this.currentcustomer).subscribe();
      sessionStorage.removeItem("currentcart");
      sessionStorage.removeItem("currentqnt");
      //this.ordservice.putOrderDetail(this.orderdetail).subscribe();
      this.successAlert();
      this.router.navigate(["customer"]);
    
  }
  successAlert()
  {
    Swal.fire('Done', 'Order Placed Successfully', 'success');
  }
  logout()
  {
      sessionStorage.clear();
      this.router.navigate(["customer"]);
  }
}

