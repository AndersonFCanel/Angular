import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  constructor() { }

  public ehOperador(caractere:String):boolean{
    if(caractere == "+" || caractere == "-" || caractere == "*" || caractere == "/"){
      return true;
    }else{
      return false;
    }

  }

  public ehZero(caractere:String):boolean{
    if(caractere == "0"){
      return true;
    }else{
      return false;
    }
  }

  public ehZeroDepoisDeOperador(caractere:String, expressao:String):boolean{
      if(this.ehOperador(expressao.charAt(expressao.length-1) ) && this.ehZero(caractere)){
         return true;
      }else{
        return false;
      }
  }

  public ehOperadorDepoisDeOperador(caractere:String, expressao:String):boolean{
    if(this.ehOperador(expressao.charAt(expressao.length-1) ) && this.ehOperador(caractere)){
        return true;
     }else{
        return false;
    }
  }

  public ehValidaExpressao(caractere:String, expressao:String ):boolean{
    let valido = true;
    if(expressao.length== 0 ){
      if(this.ehOperador(caractere) || this.ehZero(caractere)){
        valido = false;
      }
    }else {
          if(this.ehZeroDepoisDeOperador(caractere, expressao)){
              valido = false;
          }else if (this.ehOperadorDepoisDeOperador(caractere, expressao)){
            valido = false;
          }
    } 
    
    return valido;
  }


}
