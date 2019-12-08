import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { DefaultModule } from './modules/default/default.module';
import { AdminLayoutModule } from './modules/admin-layout/admin-layout.module';
import { SharedModule } from './modules/shared/shared.module';
import { SharedService } from './services/shared/shared.service';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    ModalModule.forRoot(),
    DefaultModule,
    AdminLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJGQY36zsUZ06MQhe1zXFS56LDZTs3ExU'
    })
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
