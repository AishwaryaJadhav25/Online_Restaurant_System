import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { website_admin } from 'src/app/models/website-admin';
import { WebsiteAdminService } from 'src/app/services/website-admin.service';



@Component({
  selector: 'app-website-admin',
  templateUrl: './website-admin.component.html',
  styleUrls: ['./website-admin.component.scss']
})
export class WebsiteAdminComponent implements OnInit 
{

  form:FormGroup;
  websiteadmin:any;
  currentUser : string;

  submitted:boolean=false;
    rest:website_admin=new website_admin();

  constructor(private http:HttpClient, private router : Router, private formBuilder:FormBuilder,private website:WebsiteAdminService)
  {
    this.form=new FormGroup({
      userid:new FormControl(), 
      password: new FormControl()
    });
  }
  ngOnInit(): void {

    this.form=this.formBuilder.group({
      userid: ['', [Validators.required]],

      password: ['', [
        Validators.required,
        Validators.minLength(6)
        ]]
     });
  }


  get f()
    {
      return this.form.controls;
    }


  onSubmit() 
  {
   
    this.submitted=true;
    
    if(this.form.valid==true)
    {
        this.checkLogin();
     
    }
  }

    checkLogin() 
    {

      console.log(this.form.value.userid);
      this.form=this.formBuilder.group({ userid:[], password:[] });
      this.website.checkValidUser(this.form.value.userid,this.form.value.password).subscribe((data)=>
      {
          this.websiteadmin = data;
          if(this.websiteadmin.admin_id !== 0) 
          {
            if(this.websiteadmin.password===this.form.value.password) 
            {
              sessionStorage.setItem('websiteadmin',this.websiteadmin);
              this.router.navigate(['landing']);
            }
          }
          else
          {
            this.router.navigate(['login']);
          }
     
    },
      error=>console.error(error)
    

    
    );


  }


  
    
    
    
  }

 


  




  /*ngOnInit() {
  

  }
*/
  
    
  


