import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPartsComponent } from './config-parts.component';
import { PoModule, PoPageModule, PoStepperModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    PoPageModule,
    ReactiveFormsModule,
    FormsModule,
    PoStepperModule

  ],
  declarations: [ConfigPartsComponent],
  exports:[ConfigPartsComponent]
})
export class ConfigPartsModule { }
