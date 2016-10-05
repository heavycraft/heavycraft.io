import { HeavycraftPage } from './app.po';

describe('heavycraft App', function() {
  let page: HeavycraftPage;

  beforeEach(() => {
    page = new HeavycraftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
