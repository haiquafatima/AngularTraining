import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  model = false;
  constructor(private fb:FormBuilder, private router:Router) 
  {
    this.form = this.fb.group({
      username : [null,Validators.required],
      password : [null,Validators.required]
    });
   }
   

  ngOnInit(): void {
  }

  Submit()
  {
    console.log(this.form.value);
    let email = this.form.get('username').value;
    let pass = this.form.get('password').value;
    if(email == 'abcd@1234.com' && pass == 'test1234')
    {
      this.model= false;
      this.router.navigate(['/home']);
    }
    else{
      this.model= true;
    }
  }

}
