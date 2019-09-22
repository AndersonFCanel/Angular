import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    /*Veja que o AppComponent pertence ao módulo principal do programa.
      (declarado automaticamente após a criação da aplicação)
    */
    AppComponent
  ],
  imports: [
    /*Esses imports são obrigatórios 
     (recursos de Browser e rota)
    */
    BrowserModule,
    AppRoutingModule
  ],
  //Lista de serviços utilizados pelo módulo principal.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
