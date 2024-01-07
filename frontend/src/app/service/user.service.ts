import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginResonse, ILoginUser, IRegisterResponse, IRegisterUser, IUrlData, IUrlShortResponse } from '../shared/interface/IUser';
import { USER_BASE_URI } from '../shared/constants/url';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { USER_KEY } from '../shared/constants/key';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UserSubject = new BehaviorSubject<string>(this.getUserFromLocalStorage())
  public UserObservable!:Observable<string>;
  constructor(
    private Http:HttpClient,
    private toastrService:ToastrService
  ) { 
    this.UserObservable = this.UserSubject.asObservable() 
  }
/////////////////////////////////////////////////////////// 
  login(userData:ILoginUser):Observable<ILoginResonse>{
    return this.Http.post<ILoginResonse>(`${USER_BASE_URI}/login`,userData).pipe(
      tap(data=>{
        this.setUserFromLocalStorge(data)
        this.UserSubject.next(data.data)
      })
    )
  }
///////////////////////////////////////////////////////////
  register(userData:IRegisterUser):Observable<IRegisterResponse>{
   return this.Http.post<IRegisterResponse>(`${USER_BASE_URI}/register`,userData)
  }

///////////////////////////////////////////////////////////  
private setUserFromLocalStorge(UserData:ILoginResonse){
 localStorage.setItem(USER_KEY,JSON.stringify(UserData.data)) 
}
///////////////////////////////////////////////////////////  
private getUserFromLocalStorage():string{
 const token = localStorage.getItem(USER_KEY)
 if(token){
  return token
 }else{
  return ''
 }
}
/////////////////////////////////////////////////////////// 
logout(){
  this.UserSubject.next('')
  localStorage.removeItem(USER_KEY)
  window.location.reload()
} 
///////////////////////////////////////////////////////////  
urllshort(urlData:IUrlData):Observable<IUrlShortResponse>{
 return this.Http.post<IUrlShortResponse>(`${USER_BASE_URI}/urlshort`,urlData)
}
///////////////////////////////////////////////////////////  
}
