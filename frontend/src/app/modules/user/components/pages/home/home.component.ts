import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { IFetchUrlResponse, IListUrl } from 'src/app/shared/interface/IUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  urlForm!:FormGroup;
  isSubmitted:boolean=false;
  subscription!:Subscription;
  shortUrl!:string;

  constructor(
    private fb:FormBuilder,
    private userservice:UserService,
    private router:Router,
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
    this.subscription = this.userservice.urlShort(this.urlForm.value).subscribe((data)=>{
      this.shortUrl = data.data      
    })
    
  }
////////////////////////////////////////////////////////////////////////
urlSubmit(shortUrl:string){
 this.subscription = this.userservice.fetchUrl(shortUrl).subscribe((data)=>{
  if(data&& data.data){
    window.location.href=data.data.full
  }
  })
  
}
////////////////////////////////////////////////////////////////////////
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }


}
