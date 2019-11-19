import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DefaultModule } from './modules/default/default.module';
import { AdminLayoutModule } from './modules/admin-layout/admin-layout.module';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full',
  },
   {
    path: '**',
    redirectTo: 'default'
  }
];


@NgModule({
  imports: [
    DefaultModule,
    AdminLayoutModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
