  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../../components/default/default.component';

export const DefaultRouter: Routes = [
    { path: 'default',  component: DefaultComponent },
];

@NgModule({
    imports: [
      RouterModule.forRoot(DefaultRouter)
    ],
    exports: [RouterModule]
  })
  export class DefaultRoutingModule { }