import { Restaurant } from "./restaurant";
import { Role } from "./role";

export class OrderManager
{
    authority_id:number;
    contact_no:string;
    email:string;
    first_nm:string;
    last_nm:string;
    password:string;
    restaurant:Restaurant;
    role:Role;
}