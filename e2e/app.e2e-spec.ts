import { ResumeAppPage } from './app.po';

describe('resume-app App', () => {
  let page: ResumeAppPage;

  beforeEach(() => {
    page = new ResumeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
