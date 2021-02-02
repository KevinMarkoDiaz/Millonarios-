import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { InolvidablesComponent } from './components/inolvidables/inolvidables.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DestacadosComponent,
    InolvidablesComponent,
    CamisetasComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
