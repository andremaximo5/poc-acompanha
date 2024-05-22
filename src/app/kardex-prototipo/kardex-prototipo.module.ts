import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KardexPrototipoComponent } from './kardex-prototipo.component';
import { PoModule, PoPageModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    PoPageModule
  ],
  declarations: [KardexPrototipoComponent],
  exports:[KardexPrototipoComponent]
})
export class KardexPrototipoModule { }
