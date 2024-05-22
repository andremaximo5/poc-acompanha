import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPartsComponent } from './config-parts.component';
import { PoModule, PoPageModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    PoPageModule,
  ],
  declarations: [ConfigPartsComponent],
  exports:[ConfigPartsComponent]
})
export class ConfigPartsModule { }
