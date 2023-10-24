import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewcustomerService } from 'src/app/services/viewcustomer.service';
import { ViewCustomer } from '../../models/viewcustomer';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  viewcustomer: any = [];
  b1: ViewCustomer = new ViewCustomer();

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private viewcustomerservice: ViewcustomerService) { }

  ngOnInit(): void {
    this.viewcustomerservice.getCustomerList().subscribe((r) => { this.viewcustomer= r;  });
  }


}
