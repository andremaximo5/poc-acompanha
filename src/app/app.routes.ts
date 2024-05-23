import { Routes } from '@angular/router';
import { KardexPrototipoComponent } from './kardex-prototipo/kardex-prototipo.component';
import { ConfigPartsComponent } from './config-parts/config-parts.component';
import { KardexPrototipoResultsComponent } from './kardex-prototipo/kardex-prototipo-results/kardex-prototipo-results.component';
import { KardexPrototipoMovimentsComponent } from './kardex-prototipo/kardex-prototipo-results/kardex-prototipo-moviments/kardex-prototipo-moviments.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'kardexPart', component: KardexPrototipoComponent},
  {
    path: 'configParts', component: ConfigPartsComponent
  },
  {
    path: 'kardexResults', component: KardexPrototipoResultsComponent
  },
  {
    path: 'kardexMoviments', component: KardexPrototipoMovimentsComponent
  }

];
