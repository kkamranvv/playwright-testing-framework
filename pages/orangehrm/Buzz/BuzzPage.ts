import { Page, Locator } from "@playwright/test";

export class BuzzPage {
  readonly page: Page;
  readonly addBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBtn = page.locator("//button[normalize-space()='Add']");
  }

  async gotoBuzz() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz"
    );
  }
}
