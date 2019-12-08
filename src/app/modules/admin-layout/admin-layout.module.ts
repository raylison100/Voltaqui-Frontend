import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutingModule } from './admin-layout.routing';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { MapsComponent } from '../../components/maps/maps.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AdminLayoutComponent } from '../../components/layouts/admin-layout/admin-layout.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { ConsultoriaComponent } from 'app/components/consultoria/consultoria.component';
import { AvaliarRestauranteComponent } from 'app/components/avaliar-restaurante/avaliar-restaurante.component';
import { DashboardClienteComponent } from 'app/components/dashboard-cliente/dashboard-cliente.component';


@NgModule({
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,    
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    UserProfileComponent,
    AdminLayoutComponent,
    MapsComponent,
    ConsultoriaComponent,
    DashboardClienteComponent,
    AvaliarRestauranteComponent,
  ]
})

export class AdminLayoutModule {}
