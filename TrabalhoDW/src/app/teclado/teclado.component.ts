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
  public pontoPlayer1 = 0;
  public pontoPlayer2 = 0;

  public marcarReadonly = [];

  constructor(private validacao: ValidacaoService) { }

  ngOnInit() {

    //inicializando os vetores
    for (var counter: number = 0; counter < 9; counter++) {

      this.jogada[counter] = "";
      this.marcarReadonly[counter] = false;

      console.log("for loop executed : " + counter)
    }

  }

  readonly(casaTabuleiro: number) {
    this.marcarReadonly[casaTabuleiro] = true;
  }

  imprimeCasaMarcada() {
    console.log(this.jogada[0], this.jogada[1], this.jogada[2] + "\n");
    console.log(this.jogada[3], this.jogada[4], this.jogada[5] + "\n");
    console.log(this.jogada[6], this.jogada[7], this.jogada[8] + "\n");

  }

  marcaJogada(casaTabuleiro: number) {
    console.log("vez: " + this.vez);

    if (this.vez % 2 == 0) {
      console.log("Casa marcada " + casaTabuleiro);

      this.vez = this.vez + 1;
      this.jogada[casaTabuleiro] = "O"
      this.readonly(casaTabuleiro);
      this.checarVitoria();

      this.imprimeCasaMarcada()

      return this.jogada;
    }
    else {
      console.log("Casa marcada " + casaTabuleiro);

      this.vez = this.vez + 1;
      this.jogada[casaTabuleiro] = "X"
      this.readonly(casaTabuleiro);
      this.checarVitoria();

      this.imprimeCasaMarcada()

      return this.jogada;
    }

  }


  checarVitoria() {

    if ((this.jogada[0] == "X" && this.jogada[1] == "X" && this.jogada[2] == "X") ||
      (this.jogada[3] == "X" && this.jogada[4] == "X" && this.jogada[5] == "X") ||
      (this.jogada[6] == "X" && this.jogada[7] == "X" && this.jogada[8] == "X") ||
      (this.jogada[0] == "X" && this.jogada[3] == "X" && this.jogada[6] == "X") ||
      (this.jogada[1] == "X" && this.jogada[4] == "X" && this.jogada[7] == "X") ||
      (this.jogada[2] == "X" && this.jogada[3] == "X" && this.jogada[8] == "X") ||
      (this.jogada[0] == "X" && this.jogada[4] == "X" && this.jogada[8] == "X") ||
      (this.jogada[2] == "X" && this.jogada[4] == "X" && this.jogada[6] == "X")) {

      this.pontoPlayer1 = this.pontoPlayer1 + 1;

      console.log("X venceu");

      return "X";

    } else
      if ((this.jogada[0] == "O" && this.jogada[1] == "O" && this.jogada[2] == "O") ||
        (this.jogada[3] == "O" && this.jogada[4] == "O" && this.jogada[5] == "O") ||
        (this.jogada[6] == "O" && this.jogada[7] == "O" && this.jogada[8] == "O") ||
        (this.jogada[0] == "O" && this.jogada[3] == "O" && this.jogada[6] == "O") ||
        (this.jogada[1] == "O" && this.jogada[4] == "O" && this.jogada[7] == "O") ||
        (this.jogada[2] == "O" && this.jogada[3] == "O" && this.jogada[8] == "O") ||
        (this.jogada[0] == "O" && this.jogada[4] == "O" && this.jogada[8] == "O") ||
        (this.jogada[2] == "O" && this.jogada[4] == "O" && this.jogada[6] == "O")) {

        this.pontoPlayer2 = this.pontoPlayer2 + 1;

        console.log("O venceu");
        return "O";

      } else {
        console.log("Ainda não há vencedor");
        return ""
      }
  }





  restart() {

    this.ngOnInit()
  }




  

}
