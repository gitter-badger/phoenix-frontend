import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PhoenixAppComponent } from '../app/phoenix.component';

beforeEachProviders(() => [PhoenixAppComponent]);

describe('App: Phoenix', () => {
  it('should create the app',
      inject([PhoenixAppComponent], (app: PhoenixAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'phoenix works!\'',
      inject([PhoenixAppComponent], (app: PhoenixAppComponent) => {
    expect(app.title).toEqual('phoenix works!');
  }));
});
