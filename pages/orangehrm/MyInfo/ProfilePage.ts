import { Page, Locator } from "@playwright/test";

export class ProfilePage {
  readonly myInfo: Locator;

  constructor(page: Page) {
    this.myInfo = page.locator("//span[normalize-space()='My Info']");
  }

  async clickMyInfo() {
    await this.myInfo.click();
  }
}
