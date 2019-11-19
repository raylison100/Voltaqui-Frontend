import { Component, OnInit } from '@angular/core';
import { AlertModalService } from 'app/services/shared/alert-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultoria',
  templateUrl: './consultoria.component.html',
  styleUrls: ['./consultoria.component.scss']
})
export class ConsultoriaComponent implements OnInit {

  constructor(
    private alertModalService: AlertModalService,
    private router: Router,   
  ) { }

  ngOnInit() {
  }

  solicitarConsultoria() {

    this.alertModalService.showAlertDanger("Formulario enviado com sucesso. Entraremos em contato em breve!",2000);
    this.router.navigate(['dashboard'])
    
  }

}
