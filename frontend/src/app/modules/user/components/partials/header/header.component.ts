import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  token!:string;

  ///////////////////////////////////////////////////////////  
  constructor(
    private userService:UserService
  ){
    this.userService.UserObservable.subscribe(newToken=>{
      this.token = newToken
    })
  }
  ///////////////////////////////////////////////////////////  
  logout(){
    this.userService.logout()
  }
  ///////////////////////////////////////////////////////////  
}
