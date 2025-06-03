import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getToolbarText() {
    return element(by.css('app-root .toolbar span')).getText() as Promise<string>;
  }
}
