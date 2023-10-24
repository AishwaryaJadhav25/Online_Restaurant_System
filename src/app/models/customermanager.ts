import { Restaurant } from "./restaurant";
import { Role } from "./role";

export class CustomerManager
{
    authority_id:number;
    first_nm:string;
    last_nm:string;
    password:string;
    email:string;
    contact_no:string;
    restaurant:Restaurant;
    role:Role;
}