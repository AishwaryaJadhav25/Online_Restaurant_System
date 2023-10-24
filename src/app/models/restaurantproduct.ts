import { Product } from "./product";
import { Restaurant } from "./restaurant";

export class RestaurantProduct
{
    r_product_id:number;
    unit_price:number;
    product:Product;
    restaurant:Restaurant;
}