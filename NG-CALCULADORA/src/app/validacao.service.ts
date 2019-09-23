import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  constructor() { }

    // verifica se o caracterer passado é um operador
    public ehOperador(caractere:string):boolean{
      if(caractere=="+" || caractere=="-" || caractere=="/" || caractere=="*"){
        return true;
      } else {
        return false;
      }
    }
  
    // verifica se o caracterer passado é zero
    public ehZero(caractere:string):boolean{
      if(caractere=="0"){
        return true;
      } else {
        return false;
      }
    }
  
    // verifica se o último caractere da expresão é um operador
    // e o caractere passado é zero
    public ehZeroDepoisDeOperador(caractere:string, expressao:string):boolean{
      
      if(this.ehOperador(expressao.charAt(expressao.length-1)) && this.ehZero(caractere)){
        return true;
      } else {
        return false;
      }
    }
  
    // verifica se o último caractere da expresão é um operador
    // e o caractere passado é operador
    public ehOperadorDepoisDeOperador(caractere: string, expressao: string): boolean {
      if(this.ehOperador(expressao.charAt(expressao.length-1)) && this.ehOperador(caractere)){
        return true;
      } else {
        return false;
      }
    }
  
    // verifica se a expressao a ser montada é válida
    // (a) não pode ter zero e operador no começo da expressão
    // (b) não pode ter zero depois de operador
    // (c) não pode ter operador depois de operador
    public ehValidaExpressao(caractere:string, expressao:string):boolean{
      let valido:boolean = true;
      if(expressao.length==0){
        if(this.ehOperador(caractere) || this.ehZero(caractere)){
          valido=false;
        }
      } else {
        if(this.ehZeroDepoisDeOperador(caractere,expressao)){
          valido=false;
        } 
        else if(this.ehOperadorDepoisDeOperador(caractere,expressao)) {
          valido=false;
        }
      }
      return valido;
    }
  


}
