import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {PhoenixFrontendApp} from '../app/phoenix-frontend.component';

beforeEachProviders(() => [PhoenixFrontendApp]);

describe('App: PhoenixFrontend', () => {
  it('should have the `defaultMeaning` as 42', inject([PhoenixFrontendApp], (app: PhoenixFrontendApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([PhoenixFrontendApp], (app: PhoenixFrontendApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

