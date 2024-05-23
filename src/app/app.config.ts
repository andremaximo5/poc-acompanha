import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import { KardexPrototipoModule } from './kardex-prototipo/kardex-prototipo.module';
import { ConfigPartsModule } from './config-parts/config-parts.module';
import { KardexPrototipoModelModule } from './kardex-prototipo/kardex-prototipo-results/kardex-prototipo-model.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([BrowserAnimationsModule, PoHttpRequestModule, KardexPrototipoModule,KardexPrototipoModelModule,
    ConfigPartsModule]),
  ],

};
