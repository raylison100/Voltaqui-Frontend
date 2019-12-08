
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { AdminLayoutComponent } from '../../components/layouts/admin-layout/admin-layout.component';
import { MapsComponent } from '../../components/maps/maps.component'
import { ConsultoriaComponent } from 'app/components/consultoria/consultoria.component';
import { DashboardClienteComponent } from 'app/components/dashboard-cliente/dashboard-cliente.component';
import { AvaliarRestauranteComponent } from 'app/components/avaliar-restaurante/avaliar-restaurante.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            component: DashboardComponent
        }]
    }, {
        path: 'maps',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            component: MapsComponent
        }]
    },
    {
        path: 'user-profile',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            component: UserProfileComponent
        }]
    },
    {
        path: 'consultoria',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            component: ConsultoriaComponent
        }]

    },
    {
        path: 'dashboard-cliente',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            component: DashboardClienteComponent
        }]

    },
    {
        path: 'avaliar-restaurante',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            component: AvaliarRestauranteComponent
        }]

    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(AdminLayoutRoutes)
    ],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
