import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoChartModule, PoModule } from '@po-ui/ng-components';
import { KardexPrototipoOrdemproductionComponent } from './kardex-prototipo-ordemproduction.component';



@NgModule({
  declarations: [KardexPrototipoOrdemproductionComponent],
  imports: [
    CommonModule,
    PoModule,
    PoChartModule
  ],
  exports:[KardexPrototipoOrdemproductionComponent]
})
export class KardexPrototipoOrdemproductionModule { }
