import { Component, OnInit } from '@angular/core';
import { AlertModalService } from 'app/services/shared/alert-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliar-restaurante',
  templateUrl: './avaliar-restaurante.component.html',
  styleUrls: ['./avaliar-restaurante.component.scss']
})
export class AvaliarRestauranteComponent implements OnInit {

  constructor(
    private alertModalService: AlertModalService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  avaliarRestaurante(){
    //TODO: colocar o router pra ir para o local certo
    //
    this.alertModalService.showAlertDanger("Obrigado por sua avaliação",2000);
    this.router.navigate(['maps'])
  }

}
