import { Component } from '@angular/core';

@Component({
/*selector: 'app-root' ==>> Seletor usado lá no index.html. 
(Verifique que se você trocar o nome do seletor, no index.html também deve ser trocado)
 */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'NG-CALCULADORA' ==>> Título usado no app.component.html por interpolação.
  title = 'Calculadora';
}
