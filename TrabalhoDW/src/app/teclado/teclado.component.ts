import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from '../validacao.service';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  public resultado="";
  
  public jogada = " ";
  public vez = 1;

  public player1 = "meu pau";
  public player2 = "meu ovo";

  constructor(private validacao:ValidacaoService) { }

  ngOnInit() {
  }


  marcaJogada()
  {
    if(this.vez%2 == 0)
    {
      console.log("PAR");
      this.vez = this.vez + 1;
      this.jogada = "O"
      return this.jogada ;
    }
    else  
    {
      console.log("IMPAR");
      this.vez = this.vez + 1;
      this.jogada = "X";
      return this.jogada;
    }


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
