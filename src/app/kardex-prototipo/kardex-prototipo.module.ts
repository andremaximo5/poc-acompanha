import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KardexPrototipoComponent } from './kardex-prototipo.component';
import { PoModule, PoPageModule, PoStepperModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    PoPageModule,
    PoStepperModule,
    ReactiveFormsModule
  ],
  declarations: [KardexPrototipoComponent],
  exports:[KardexPrototipoComponent]
})
export class KardexPrototipoModule { }
