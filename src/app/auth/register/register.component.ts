import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertModalService } from '../../services/shared/alert-modal.service';
import { ResponseModel } from '../../models/response.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private alertModalService: AlertModalService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    });
  }

  registerUser() {
    this.submitted = true;
    this.loading = true;
    if (this.form.valid) {
      this.userService.create(this.form.value)
        .subscribe((response: ResponseModel) => {
          if(!response.error){
            this.router.navigate(['default']);
            this.alertModalService.showAlertSuccess(response.message);
            this.loading = false;
          }else{
            this.alertModalService.showAlertDanger(response.message);
            this.loading = false;
          }          
        }, error => {
          this.alertModalService.showAlertDanger(error.error.message)
          this.loading = false;
        });
    }

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }
}