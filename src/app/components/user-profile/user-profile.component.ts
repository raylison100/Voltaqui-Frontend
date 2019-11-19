import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  shared: SharedService;

  constructor(
    private router: Router,   
  ) { 
    this.shared = SharedService.getInstance()
  }

  ngOnInit() {
  }

  voltar(){
    if(this.shared.showTemplateUser){
      this.router.navigate(['dashboard'])
    }else{
      this.router.navigate(['maps'])
    }
  }
}
