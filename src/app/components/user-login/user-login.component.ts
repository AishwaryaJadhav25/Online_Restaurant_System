import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Authority } from 'src/app/models/authority';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  user: any;
  currentUser: string;
  constructor(private http: HttpClient, private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({ email: [], password: [] });
  }

  checkLogin() {
   
    this.userService.checkValidUser(this.loginForm.value.email, this.loginForm.value.password).subscribe
      ((data: Authority) => {
        this.user = data;
        if (this.user.authority_id !== 0) {
          if (this.user.email.toString()) {
            this.currentUser = JSON.stringify(this.user);
            console.log(this.user.role?.role_name);
            if (this.user.role?.role_name === 'Admin') 
            {
              if(this.user.password==this.loginForm.value.password)
              {
                sessionStorage.setItem('currentUser', this.currentUser);
                this.router.navigate(['operation']);
              }
              
            }
            else if (this.user.role?.role_name === 'OR manager') 
            {
              if(this.user.password==this.loginForm.value.password)
              {
              sessionStorage.setItem('currentUser', this.currentUser);
              this.router.navigate(['or']);
              }
              
            }
            else if (this.user.role.role_name === 'CR manager') 
            {
              if(this.user.password==this.loginForm.value.password)
              {
              sessionStorage.setItem('currentUser', this.currentUser);
              this.router.navigate(['cr']);
              }
              
            }
          }
        }
        else
          this.router.navigate(['login']);
      },
        error => console.error(error)
      );
  }
}
