import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PhoenixFrontendAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(PhoenixFrontendAppComponent);
