import { Page, Locator } from "@playwright/test";

export class AddPost {
  readonly page: Page;
  readonly postTextArea: Locator;
  readonly postBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.postTextArea = page.locator(
      '//textarea[@placeholder="What\'s on your mind?"]'
    );

    this.postBtn = page.locator("//button[@type='submit']");
  }

  async addPost(text: string) {
    await this.postTextArea.click();
    await this.postTextArea.fill(text);
    await this.postBtn.click();
  }

  getPostByText(text: string): Locator {
    return this.page
      .locator(
        `//div[contains(@class,'orangehrm-buzz-newsfeed-posts')]//p[normalize-space()='${text}']`
      )
      .first();
  }
}
