import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidatorComponent } from './components/partials/input-validator/input-validator.component'
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { UserTokenInterceptorService } from './interceptors/user.interceptors';
import { HttpErrorInterceptorService } from './interceptors/errorHttp.interceptor';
import { LoadingComponent } from './components/pages/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    InputContainerComponent,
    InputValidatorComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      newestOnTop: false
    })
  ],
  exports:[InputContainerComponent,InputValidatorComponent],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:UserTokenInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:HttpErrorInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
