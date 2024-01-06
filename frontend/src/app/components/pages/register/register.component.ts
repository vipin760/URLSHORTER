import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { PasswordValidatorStrong } from 'src/app/shared/validator/passwordstrong';
import { PasswordMatchValidator } from 'src/app/shared/validator/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup
  isSubmitted:boolean=false;
  constructor(
    private fb :FormBuilder,
    private userService:UserService
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
this.userService.register(this.registerForm.value)
}
}
