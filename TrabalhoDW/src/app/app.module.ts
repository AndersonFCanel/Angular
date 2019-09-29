import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';

import { AlertModule, ButtonsModule } from 'ngx-bootstrap';
import { InformacoesModule } from './informacoes/informacoes.module';


@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    InformacoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
