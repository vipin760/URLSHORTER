import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  urlForm!:FormGroup;
  isSubmitted:boolean=false;
  subscription!:Subscription;

  constructor(
    private fb:FormBuilder,
    private userservice:UserService
  ){}

  ngOnInit(): void {
    this.urlForm = this.fb.group({
      urlFull:['',[Validators.required,Validators.minLength(10)]]
    })
  }
 get fc(){
  return this.urlForm.controls
 }
  submit(){
    this.isSubmitted=true
    if(this.urlForm.invalid) return;
    this.subscription = this.userservice.urllshort(this.urlForm.value).subscribe((data)=>{

    })
    
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }


}
