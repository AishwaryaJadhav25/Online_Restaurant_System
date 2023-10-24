import { Customer } from "./customer";
import { OrderDetails } from "./orderdetail";
import { Restaurant } from "./restaurant";
import { Status } from "./status";

export class Orders
{
    order_id:number;
    date:string;
    total_amount:number;
    payment_mode:string="cash on delivery";
    payment_status:string="pending";
    customer:Customer;
    status:Status;
    restaurant:Restaurant;
    //orderdetails:OrderDetails[]=[];

    constructor(date?:string,total_amount?:number,pmode?:string,pstatus?:string, customer?:Customer,sts?:Status,res?:Restaurant)
    {
        this.date=date;
        this.total_amount=total_amount;
        this.payment_mode=pmode;
        this.payment_status=pstatus;
        this.customer=customer;
        this.status=sts;
        this.restaurant=res;
        //this.orderdetails=ordtl;
    };
}