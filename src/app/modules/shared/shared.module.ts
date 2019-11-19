import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from '../../components/alert-modal/alert-modal.component';


@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertModalComponent
  ],
  entryComponents: [
    AlertModalComponent
  ]
})
export class SharedModule { }