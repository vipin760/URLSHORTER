import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ERROR_MESSAGE } from 'src/app/shared/constants/Errormessages';
@Component({
  selector: 'input-validator',
  templateUrl: './input-validator.component.html',
  styleUrls: ['./input-validator.component.css']
})
export class InputValidatorComponent implements OnInit, OnChanges, OnDestroy{
errorMessages:string[]=[]
Subscription!:Subscription;
firstErrorMessage: string | null = null;

  @Input()
  showErrorWhen:boolean=true;

  @Input()
  control!:AbstractControl

  checkValidators(){
    const error = this.control.errors
    console.log(error);
    
    if(!error){
 this.errorMessages = []
 return
    }else{
      const errorKey = Object.keys(error)
      this.errorMessages = errorKey.map(key => ERROR_MESSAGE[key])
    }
    this.updateErrorMessage()

  }
ngOnInit(): void {
this.Subscription=  this.control.valueChanges.subscribe(()=>{
    this.checkValidators()
  })

  this.Subscription=this.control.statusChanges.subscribe(()=>{
    this.checkValidators()
  })
  
}

ngOnChanges(changes: SimpleChanges): void {
  this.checkValidators()
}
  
ngOnDestroy(): void {
  this.Subscription.unsubscribe()
}

updateErrorMessage(){
  this.firstErrorMessage = this.errorMessages.length>0?this.errorMessages[0] :null;
}
}
