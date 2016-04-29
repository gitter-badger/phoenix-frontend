import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {PhoenixFrontendApp} from './app/phoenix-frontend.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(PhoenixFrontendApp);
