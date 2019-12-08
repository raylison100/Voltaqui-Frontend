import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service'
import { AlertModalService } from '../../services/shared/alert-modal.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  shared: SharedService;
  loading = false;

  constructor(
    private alertModalService: AlertModalService,
    private router: Router,   
  ) { 
    this.shared = SharedService.getInstance()
  }

  ngOnInit() {
  }

  entrarRestaurate() {
    this.loading = true;
    this.alertModalService.showAlertDanger('SEJA BEM VINDO AO VOLTAQUI',1600);
    this.shared.showTemplateUser = true;
    this.loading = false;
    this.router.navigate(['dashboard'])
    
  }

  entrarCliente() {
    this.loading = true;
    this.alertModalService.showAlertDanger('SEJA BEM VINDO AO VOLTAQUI',1600);
    this.shared.showTemplateUser = false;
    this.loading = false;
    this.router.navigate(['dashboard-cliente'])    
  }

}
