import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Authority } from 'src/app/models/authority';
import { RestsvcService } from 'src/app/services/restsvc.service';


@Component({
  selector: 'app-restmgr',
  templateUrl: './restmgr.component.html',
  styleUrls: ['./restmgr.component.css']
})
export class RestmgrComponent implements OnInit {

  loginForm : FormGroup;
  user : any;
  currentUser : Authority;
  constructor(private http:HttpClient, private router : Router, private userService:RestsvcService, private formBuilder:FormBuilder) {
    this.loginForm=new FormGroup({
      uid:new FormControl(), 
      password: new FormControl()
    });

  }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({ uid:[], password:[] });

    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  }

  logout()
  {
    sessionStorage.clear();
    this.router.navigate(["main"]);
  }

  // checkLogin() {

  //   console.log(this.loginForm.value.email);
  //   this.userService.checkValidUser(this.loginForm.value.uid, this.loginForm.value.passoword).subscribe
  //   (data=>{this.user = data;
  //     if(this.user.id !== 0) {
  //       if(this.user.uid.toString()) {
  //           sessionStorage.setItem('userLog',this.user.uid);
  //           this.currentUser = JSON.stringify(this.user);
  //           sessionStorage.setItem('currentUser', this.currentUser);
  //           this.router.navigate(['products']);
  //         }
  //     }
  //     else
  //       this.router.navigate(['addProduct']);
  //   },
  //     error=>console.error(error)
    

    
  //   );
    
  //}

}
