import { Routes } from '@angular/router';
import { KardexPrototipoComponent } from './kardex-prototipo/kardex-prototipo.component';
import { ConfigPartsComponent } from './config-parts/config-parts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'kardexPart', component: KardexPrototipoComponent},
  {
    path: 'configParts', component: ConfigPartsComponent
  }

];
