import { Page, Locator, expect } from "@playwright/test";

export class DeleteEmployee {
  readonly page: Page;
  readonly deleteBtn: Locator;
  readonly records: Locator;
  readonly deleteConfirm: Locator;

  constructor(page: Page) {
    this.page = page;

    this.deleteBtn = page.locator(".oxd-table-card .oxd-icon-button");

    this.deleteConfirm = page.locator(
      "//button[normalize-space()='Yes, Delete']"
    );

    this.records = page.locator("//span[contains(text(),'Records Found')]");
  }

  async clickDeleteBtn() {
    await this.deleteBtn.first().click();
  }

  async confirmDelete() {
    await this.deleteConfirm.click();
  }

  async getRecordsCount(): Promise<number> {
    await expect(this.records).toBeVisible();

    const text = await this.records.textContent();
    const match = text?.match(/\d+/);
    return match ? Number(match[0]) : 0;
  }
}
