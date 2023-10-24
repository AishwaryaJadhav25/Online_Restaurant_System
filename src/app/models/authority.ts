import { Restaurant } from "./restaurant";

export class Authority {
    authority_id: number;
    first_nm: string;
    last_nm: string;
    password: string;
    email: string;
    contact_no: string;
    role_id: number;
    restaurant: Restaurant;
}