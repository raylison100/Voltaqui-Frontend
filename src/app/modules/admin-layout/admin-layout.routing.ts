
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { AdminLayoutComponent } from '../../components/layouts/admin-layout/admin-layout.component';
import { MapsComponent } from '../../components/maps/maps.component'

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
        component: UserProfileComponent 
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(AdminLayoutRoutes)
    ],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
