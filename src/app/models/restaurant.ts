import { RestaurantProduct } from "./restaurantproduct";

export class Restaurant 
{
    restaurant_id:number;
    restaurant_nm:string;
    reg_date:Date;
    validity_date:Date;
    address:string;
    gstin:string;
   // restaurantProducts:RestaurantProduct[];
}