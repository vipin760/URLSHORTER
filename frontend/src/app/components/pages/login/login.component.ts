import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  isSubmitted:boolean=false;

  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  get fc(){
    return this.loginForm.controls
  }

  submit(){
    this.isSubmitted=true
    if(this.loginForm.invalid) return
    this.userService.login(this.loginForm.value)
    
  }

}
