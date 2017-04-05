import { FormControlPage } from './app.po';

describe('form-control App', () => {
  let page: FormControlPage;

  beforeEach(() => {
    page = new FormControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
