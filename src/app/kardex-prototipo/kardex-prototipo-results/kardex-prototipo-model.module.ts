import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KardexPrototipoResultsComponent } from './kardex-prototipo-results.component';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  imports: [
    CommonModule,
    PoModule,
  ],
  declarations: [KardexPrototipoResultsComponent],
  exports: [KardexPrototipoResultsComponent]

})
export class KardexPrototipoModelModule { }
