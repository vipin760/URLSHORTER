import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginUser, IRegisterUser } from '../shared/interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private Http:HttpClient
  ) { }

  login(userData:ILoginUser){
    console.log("userData",userData);
    
  }
  register(userData:IRegisterUser){
    console.log("register userData",userData);
    
  }
}
