import { Page, Locator } from "@playwright/test";

export class Sidebar {
  readonly page: Page;
  readonly toggleBtn: Locator;
  readonly panel: Locator;

  constructor(page: Page) {
    this.page = page;

    this.toggleBtn = page.locator("//button[@role='none']");
    this.panel = page.locator("aside.oxd-sidepanel");
  }

  async collapse() {
    await this.toggleBtn.click();
  }

  async isCollapsed(): Promise<boolean> {
    return await this.panel.evaluate((el) => el.classList.contains("toggled"));
  }

  getMenuItem(name: string): Locator {
    return this.page.locator(
      `//a[contains(@class,'oxd-main-menu-item')]//span[normalize-space()='${name}']/..`
    );
  }

  async isActive(name: string): Promise<boolean> {
    return await this.getMenuItem(name).evaluate((el) =>
      el.classList.contains("active")
    );
  }
}
