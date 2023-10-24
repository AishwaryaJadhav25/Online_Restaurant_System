import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Orders } from 'src/app/models/orders';
import { Status } from 'src/app/models/status';
import { OrderService } from 'src/app/services/order.service';
import { StatusService } from 'src/app/services/status.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-order-manager-landing',
  templateUrl: './order-manager-landing.component.html',
  styleUrls: ['./order-manager-landing.component.scss']
})
export class OrderManagerLandingComponent implements OnInit {

  orders: Orders[];
  statuses: Status[];
  paymentStatuses: Status[];
  searchString = '';
  currentcustomer: Customer;

  constructor(private orderService: OrderService,
    private statusService: StatusService,
    private router: Router,
    private utiliteService: UtilitiesService) { }

  ngOnInit() {
    this.currentcustomer = JSON.parse(sessionStorage.getItem("currentUser"));
    if (this.currentcustomer) {
      this.paymentStatuses = [
        {
          status_id: 1,
          status_name: 'completed'
        }, {
          status_id: 2,
          status_name: 'pending'
        }
      ]
      this.getOrders()
    } else {
      this.router.navigate(["/"]);
    }
  }

  getOrders() {
    this.orderService.getallOrders().subscribe((orders: Orders[]) => {
      this.statusService.getStatuses().subscribe((statuses: Status[]) => {
        this.orders = orders.sort((a, b) => b.order_id - a.order_id);
        this.statuses = statuses;
      });
    })
  }

  updateStatus(event, order: Orders) {
    if (confirm("Are you sure to update order id: " + order.order_id)) {
      this.statusService.getStatusById(Number(event)).subscribe((status: Status) => {
        const updatedOrder = {
          ...order,
          status
        };
        this.orderService.updateOrder(updatedOrder).subscribe(() => {
          // alert('Order Updated');
          this.getOrders();
        });
      });
    }
  }

  onPaymentStatus(event, order: Orders) {
    if (confirm("Are you sure to update order id: " + order.order_id)) {
      const updatedOrder = {
        ...order,
        payment_status: event
      };
      this.orderService.updateOrder(updatedOrder).subscribe(() => {
        // alert('Order Updated');
        this.getOrders();
      });
    }
  }

  generateReport() {
    let data = [];
    this.orders.map(ff => {
      data.push(this.utiliteService.deserializeObject(ff));
    });
    this.utiliteService.generateReport(data, `Report_${new Date().toString()}`);
  }


  logout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

}
