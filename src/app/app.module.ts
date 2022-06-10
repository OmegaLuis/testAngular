import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HistoryComponent } from './history/history.component';
import { ProyectsComponent } from './proyects/proyects.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LenguajesComponent,
    AboutMeComponent,
    HistoryComponent,
    ProyectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
