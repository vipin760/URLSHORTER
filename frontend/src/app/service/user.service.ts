import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginResonse, ILoginUser, IRegisterResponse, IRegisterUser } from '../shared/interface/IUser';
import { USER_BASE_URI } from '../shared/constants/url';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private Http:HttpClient,
    private toastrService:ToastrService
  ) { }

  login(userData:ILoginUser):Observable<ILoginResonse>{
    return this.Http.post<ILoginResonse>(`${USER_BASE_URI}`,userData)
    
  }
  register(userData:IRegisterUser):Observable<IRegisterResponse>{
   return this.Http.post<IRegisterResponse>(`${USER_BASE_URI}/register`,userData)
  }

///////////////////////////////////////////////////////////  
  }
