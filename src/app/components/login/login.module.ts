import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module'
import {MaterialModule} from '../../core/shares/material/material.module'; 
import { MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
