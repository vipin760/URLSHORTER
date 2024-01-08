import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, catchError, tap, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class HttpErrorInterceptorService implements HttpInterceptor {
    constructor(
        private toastrService: ToastrService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                this.toastrService.error(error.error)
                return throwError(error.error)
            })
        )

    }
}