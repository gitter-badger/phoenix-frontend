import { PhoenixFrontendPage } from './app.po';

describe('phoenix-frontend App', function() {
  let page: PhoenixFrontendPage;

  beforeEach(() => {
    page = new PhoenixFrontendPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('phoenix-frontend works!');
  });
});
