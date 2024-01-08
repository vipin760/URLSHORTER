import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { USER_KEY } from "../shared/constants/key";


@Injectable({
    providedIn: 'root'
})

export class UserTokenInterceptorService implements HttpInterceptor {

    constructor() { }
    intercept(_req: HttpRequest<any>, _next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenData = localStorage.getItem(USER_KEY)
        const token = tokenData ? JSON.parse(tokenData) : ''

        let jwttoken = _req.clone({
            setHeaders: {
                'Authorization': token ? token : ''
            }
        })
        return _next.handle(jwttoken)
    }
}