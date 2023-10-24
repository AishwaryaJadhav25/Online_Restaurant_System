import { Orders } from "./orders";
import { RestaurantProduct } from "./restaurantproduct";

export class OrderDetails 
{
    or_detail_id:number;
	amount:number;
    quantity:number;
    rs:RestaurantProduct;
    order:Orders;

    constructor(amt?:number,qnt?:number,rs?:RestaurantProduct,ord?:Orders)
    {
        this.amount=amt;
        this.quantity=qnt;
        this.rs=rs;
        this.order=ord;
    }
}