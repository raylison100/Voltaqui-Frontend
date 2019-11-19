import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from '../../services/auth/password.service';
import { AlertModalService } from '../../services/shared/alert-modal.service';
import { ResponseModel } from '../../models/response.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
 

  form: FormGroup;
  submitted = false;
  loading = false;
  
  constructor(
    public bsModalRef: BsModalRef,
    private alertModal: AlertModalService,
    private router: Router,
    private fb: FormBuilder,
    private passwordService: PasswordService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  public reset() {
    this.loading = true;
    this.passwordService.resetPassword(this.form.value)
    .subscribe((response: ResponseModel) => {
      if(!response.error){
        this.loading = false;
        this.router.navigate(['default']);
        this.bsModalRef.hide();
        this.alertModal.showAlertSuccess(response.message);
      }else{
        this.loading = false;
        this.alertModal.showAlertDanger(response.message);
      }          
    }, error => {
      this.loading = false;
      this.alertModal.showAlertDanger(error.error.message);
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }
}