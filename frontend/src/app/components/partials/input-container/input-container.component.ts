import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent {

  @Input()
  placeholder!:string

  @Input()
  control!:AbstractControl;

  @Input()
  showErrorWhen:boolean=true

  @Input()
  header!:string;

  @Input()
  type:'text' | 'email' | 'password' | 'tel' = 'text'

  get formControl(){
    return this.control as FormControl
  }
}
