import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KardexPrototipoMovimentsComponent } from './kardex-prototipo-moviments.component';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
  ],
  declarations: [KardexPrototipoMovimentsComponent],
  exports: [KardexPrototipoMovimentsComponent]
})
export class KardexPrototipoMovimentsModule { }
