import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdermanagerService } from 'src/app/services/ordermanager.service';
import Swal from 'sweetalert2';
import { Customer } from '../../models/customer';
import { CustomerUpdateService } from '../../services/customer-update.service';
import { OtpverificationService } from '../../services/otpverification.service';

@Component({
  selector: 'app-forgot-authority-password',
  templateUrl: './forgot-authority-password.component.html',
  styleUrls: ['./forgot-authority-password.component.css']
})
export class ForgotAuthorityPasswordComponent implements OnInit {
  otpVarificationForm: FormGroup;
  loginForm: FormGroup;
  resetForm: FormGroup;
  email: string;
  flag: boolean = false;
  otpflg: boolean = false;
  revotp: any;
  rotate = false;
  login = false;
  valid = false;
  password: string;
  emails: Customer[] = [];
  check = false;
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private otp: OtpverificationService, private authorityService: OrdermanagerService) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

    this.otpVarificationForm = new FormGroup({
      enteredotp: new FormControl()
    });

    this.resetForm = new FormGroup({
      enterpass: new FormControl(),
      newpass: new FormControl()
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ email: [], password: [] });
    this.authorityService.getOrderManager().subscribe((data) => {
      this.emails = data;
    })
  }
  submit() {
    let f = false;
    this.email = this.loginForm.value.email;
    this.emails.forEach(id => {
      if (id.email === this.email) {
        this.rotate = true;
        this.otp.getauthorityOtp(this.email).subscribe((data) => { this.revotp = data; this.flag = true; this.rotate = false });
        f = true;
        this.check = false;
      }
    });
    if (f == false) {
      this.check = true;
    }
  }

  verify() {
    if (this.revotp == this.otpVarificationForm.value.enteredotp) {
      this.login = true;
      this.otpflg = false;
    }
    else {
      this.otpflg = true;
    }
  }

  successMsg() {
    Swal.fire("Done!", "Password changed", "success");
  }

  ResetPassword() {
    if (this.resetForm.value.enterpass === this.resetForm.value.newpass) {
      this.valid = false;
      this.otp.resetauthoritypassword(this.loginForm.value.email, this.resetForm.value.enterpass).subscribe(() => { this.successMsg(); this.router.navigate(["login"]); });

    }
    else {
      this.valid = true;
    }
  }
}
