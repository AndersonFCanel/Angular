import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from '../validacao.service';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {
  
  public jogada = [];
  public vez = 0;
  public player1 = "UM";
  public player2 = "DOIS";

  public marcarReadonly = [false,false,false,false,false,false,false,false,false];


  
  constructor(private validacao:ValidacaoService) { }

  ngOnInit() {
  }

readonly(casaTabuleiro:Int)
{
  this.marcarReadonly[casaTabuleiro] = true;
}

  marcaJogada( casaTabuleiro:Int )
  {
    console.log("vez: " + this.vez);
    if(this.vez%2 == 0)
    {
      console.log("Casa marcada " + casaTabuleiro) ;
      this.vez = this.vez + 1;
      this.jogada[casaTabuleiro] = "O"
      this.readonly(casaTabuleiro);

      return this.jogada ;
    }
    else  
    {
      console.log("IMPAR");
      this.vez = this.vez + 1;
      this.jogada[casaTabuleiro] = "X"
      this.readonly(casaTabuleiro);
      
      return this.jogada;
    }


  }




  
}
