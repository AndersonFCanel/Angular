import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from '../validacao.service';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  public resultado="";

  constructor(private validacao:ValidacaoService) { }

  ngOnInit() {
  }


  montarResultado(digito:String){
    if(this.validacao.ehValidaExpressao(digito, this.resultado)){
      this.resultado+=digito;
    }
  }

  limpar(){
    this.resultado="";
  }

  finalizar(){
    this.resultado=eval(this.resultado).toString();
  }

}
