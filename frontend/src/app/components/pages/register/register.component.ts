import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { PasswordValidatorStrong } from 'src/app/shared/validator/passwordstrong';
import { PasswordMatchValidator } from 'src/app/shared/validator/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy{
  registerForm!:FormGroup
  isSubmitted:boolean=false;
  subscription!:Subscription;
  constructor(
    private fb :FormBuilder,
    private userService:UserService,
    private router :Router,
    private toastrService:ToastrService
  ){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      password:['',[Validators.required,Validators.minLength(6),PasswordValidatorStrong.strong]],
      cpassword:['',[Validators.required,Validators.minLength(6)]]
    },{
      validator:PasswordMatchValidator('password','cpassword')
    })
  }

get fc(){
  return this.registerForm.controls
}

submit(){
this.isSubmitted = true;
if(this.registerForm.invalid) return
this.subscription = this.userService.register(this.registerForm.value).subscribe(data=>{
  if(data.status){
    this.toastrService.success(`${data.message}`,'Success')
    this.router.navigate(['login'])
  }else{
    this.toastrService.error(`${data.message}`,'Failed')
    this.router.navigate(['register'])
  }
})
}

ngOnDestroy(): void {
  if(this.subscription){
    this.subscription.unsubscribe()
  }
}

}