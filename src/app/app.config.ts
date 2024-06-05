import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import localePt from '@angular/common/locales/pt';
import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import { KardexPrototipoModule } from './kardex-prototipo/kardex-prototipo.module';
import { ConfigPartsModule } from './config-parts/config-parts.module';
import { KardexPrototipoModelModule } from './kardex-prototipo/kardex-prototipo-results/kardex-prototipo-model.module';
import { KardexPrototipoMovimentsModule } from './kardex-prototipo/kardex-prototipo-results/kardex-prototipo-moviments/kardex-prototipo-moviments.module';
import { KardexPrototipoOrdemproductionModule } from './kardex-prototipo/kardex-prototipo-results/kardex-prototipo-moviments/kardex-prototipo-ordemproduction/kardex-prototipo-ordemproduction.module';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt')
export const appConfig: ApplicationConfig = {

  providers: [
    {

      provide: DEFAULT_CURRENCY_CODE, useValue: ''
    },
    {

      provide: LOCALE_ID, useValue: 'pt'
    },
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([BrowserAnimationsModule, PoHttpRequestModule, KardexPrototipoModule,KardexPrototipoModelModule,
    ConfigPartsModule, KardexPrototipoMovimentsModule, KardexPrototipoOrdemproductionModule]),
  ],

};
