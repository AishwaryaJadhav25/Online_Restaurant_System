import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-website-landing',
  templateUrl: './website-landing.component.html',
  styleUrls: ['./website-landing.component.scss']
})
export class WebsiteLandingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void 
  {
    
  }

  logout() {
    sessionStorage.clear();
    //this.router.navigate([""]);
  }
}
