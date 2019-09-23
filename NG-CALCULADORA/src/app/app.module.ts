import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    /*
      Veja que o AppComponent pertence ao módulo principal do programa.
      (declarado automaticamente após a criação da aplicação)
    */
    AppComponent,

    //Aula 03 - Quando você criou o componente TecladoComponent, ele foi automaticamente declarado como pertencente ao módulo principal.
    //Aula 04 - Observação: Caso o TecladoComponent estivesse em outro módulo, para AppComponente utilizá-lo, o módulo que contém o TecladoComponent deveria ser importado
    TecladoComponent
  ],
  imports: [
    /*Esses imports são obrigatórios 
     (recursos de Browser e rota)
    */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  //Lista de serviços utilizados pelo módulo principal.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

