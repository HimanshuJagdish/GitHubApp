import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router:Router,
    private tostr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    const {email, password} = f.form.value;
    this.auth.signIn(email, password)
    .then((res)=>{
      this.router.navigateByUrl('/');
      this.tostr.success("SignIn Successful");
    })
    .catch((err)=>{
      console.log("SignUp Failed");
      this.tostr.error("Invalid Credentials");
    })
  }

}
