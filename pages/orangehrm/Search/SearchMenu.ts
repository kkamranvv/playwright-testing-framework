import { Page, Locator } from "@playwright/test";

export class SearchMenu {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly menuResults: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchInput = page.locator("//input[contains(@placeholder,'Search')]");

    this.menuResults = page.locator(
      "//ul[contains(@class,'oxd-main-menu')]//span"
    );
  }

  async type(text: string) {
    await this.searchInput.fill(text);
  }

  async clear() {
    await this.searchInput.clear();
  }

  getMenuItem(name: string): Locator {
    return this.page.locator(
      `//ul[contains(@class,'oxd-main-menu')]//span[normalize-space()='${name}']`
    );
  }

  async clickMenu(name: string) {
    await this.getMenuItem(name).click();
  }
}
