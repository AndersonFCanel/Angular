import { Component, OnInit } from '@angular/core';

//Decorator que define a classe como componente
@Component({
  //Metadado que define quem é o seletor do componente
  selector: 'app-teclado',
  //Metadado que define quem é o template
  templateUrl: './teclado.component.html',
  //Metadado que define quem é o arquivo de estilo
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  //Exemplo de interpolação , ao ver utilizado o value={{resultado}} o valor 30 será apresentado.
  public resultado:number = 30;
  
  //Construtor da classe
  constructor() { }

  //Evento do ciclo de vida do componente. Permite inicializar o componente depois que ele recebeu as propriedades de entrada.
  ngOnInit() {
  }

}
