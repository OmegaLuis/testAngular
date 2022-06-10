import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
=======
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
>>>>>>> 2ec9cb339acbc89b47d90183b3bbea788a7707d1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
