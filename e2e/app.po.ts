import { browser, element, by } from 'protractor';

export class TaskManagerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tm-root h1')).getText();
  }
}
