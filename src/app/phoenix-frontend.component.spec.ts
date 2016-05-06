import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PhoenixFrontendAppComponent } from '../app/phoenix-frontend.component';

beforeEachProviders(() => [PhoenixFrontendAppComponent]);

describe('App: PhoenixFrontend', () => {
  it('should create the app',
      inject([PhoenixFrontendAppComponent], (app: PhoenixFrontendAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'phoenix-frontend works!\'',
      inject([PhoenixFrontendAppComponent], (app: PhoenixFrontendAppComponent) => {
    expect(app.title).toEqual('phoenix-frontend works!');
  }));
});
