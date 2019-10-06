import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre/sobre.component';
// { ModalInfoComponent } from './modal-info/modal-info.component';

@NgModule({
  declarations: [SobreComponent],//, ModalInfoComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [
    SobreComponent,
  //  ModalInfoComponent,
  ]
})
export class InformacoesModule { }
