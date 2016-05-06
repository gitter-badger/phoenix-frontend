export class PhoenixFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('phoenix-frontend-app h1')).getText();
  }
}
