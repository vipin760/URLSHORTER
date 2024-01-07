import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidatorComponent } from './components/partials/input-validator/input-validator.component'
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    InputContainerComponent,
    InputValidatorComponent,
    NotFoundComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
