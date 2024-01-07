import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'


@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    ClipboardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class UserModule { }
