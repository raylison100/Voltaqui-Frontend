import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from 'app/components/default/default.component';
import { DefaultRoutingModule } from './default.routing';
import { SharedService } from 'app/services/shared/shared.service';

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ],
  providers: [
    SharedService,
  ]
})
export class DefaultModule { }
