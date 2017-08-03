import { BookstorePage } from './app.po';

describe('bookstore App', () => {
  let page: BookstorePage;

  beforeEach(() => {
    page = new BookstorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
