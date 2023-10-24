import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from 'src/app/models/authority';
import { ViewTransaction } from 'src/app/models/viewtransaction';
import { ViewtransactionService } from 'src/app/services/viewtransaction.service';

@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})
export class ViewtransactionComponent implements OnInit {

  viewtransaction: any = [];
  b1: ViewTransaction = new ViewTransaction();
  a1:number;
  authority:Authority;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private viewtransactionservice: ViewtransactionService) { }
  
  ngOnInit(): void {

    this.viewtransactionservice.getCustomerList().subscribe((r) => { this.viewtransaction= r; });
    this.authority=JSON.parse(sessionStorage.getItem('currentUser'));
    // alert(JSON.stringify(this.authority));
     this.a1 = this.authority.restaurant.restaurant_id;
    // alert(this.a1);
  }

}
