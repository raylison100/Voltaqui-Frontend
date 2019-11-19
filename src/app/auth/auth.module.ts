import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginService } from '../services/auth/login.service';
import { SharedService } from '../services/shared/shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModalService } from '../services/shared/alert-modal.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmResetPasswordComponent } from './confirm-reset-password/confirm-reset-password.component';
import { ConfirmRegisterComponent } from './confirm-register/confirm-register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ConfirmResetPasswordComponent,
    ConfirmRegisterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [
    SharedService,
    LoginService,
    AlertModalService
  ],
  entryComponents:[
    ResetPasswordComponent,
  ]

})
export class AuthModule { }