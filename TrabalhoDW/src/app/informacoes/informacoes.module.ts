import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre/sobre.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';

@NgModule({
  declarations: [SobreComponent, ModalInfoComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [
    SobreComponent,
  ]
})
export class InformacoesModule { }
