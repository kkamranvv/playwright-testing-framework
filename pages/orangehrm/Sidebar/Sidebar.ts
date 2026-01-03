import { Page, Locator, expect } from "@playwright/test";

export class Sidebar {
  readonly page: Page;
  readonly toggleBtn: Locator;
  readonly panel: Locator;

  constructor(page: Page) {
    this.page = page;

    this.toggleBtn = page.locator("button.oxd-sidepanel-toggler");
    this.panel = page.locator("aside.oxd-sidepanel");
  }

  async collapse() {
    await this.toggleBtn.click();
  }

  async isCollapsed(): Promise<boolean> {
    return await this.panel.evaluate((el) =>
      el.classList.contains("oxd-sidepanel--collapsed")
    );
  }

  getMenuItem(name: string): Locator {
    return this.page.locator(
      `//span[normalize-space()='${name}']/ancestor::li`
    );
  }

  async isActive(name: string): Promise<boolean> {
    return await this.getMenuItem(name).evaluate(
      (el) =>
        el.classList.contains("--active") || el.classList.contains("active")
    );
  }
}
