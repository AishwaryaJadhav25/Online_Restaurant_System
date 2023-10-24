import { Customer } from "./customer";
import { Orders } from "./orders";
import { Restaurant } from "./restaurant";

export class Feedback {
    id: number;
    rating: number;
    customer: Customer;
    restaurant: Restaurant;
    date: string;
    order: Orders;
    feedback_id: number;
}