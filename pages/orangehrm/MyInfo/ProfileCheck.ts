// profile.page.ts
import { Locator, Page, expect } from "@playwright/test";

export class ProfileCheck {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly headerUsername: Locator;

  constructor(public page: Page) {
    this.firstName = page.locator("//input[@placeholder='First Name']");
    this.lastName = page.locator("//input[@placeholder='Last Name']");
    this.headerUsername = page.locator("//p[@class='oxd-userdropdown-name']");
  }

  async getFirstName(): Promise<string> {
    return (await this.firstName.inputValue()).trim();
  }

  async getLastName(): Promise<string> {
    return (await this.lastName.inputValue()).trim();
  }

  async getHeaderFirstAndLast(): Promise<{ first: string; last: string }> {
    const text = (await this.headerUsername.textContent())?.trim() || "";

    const parts = text.split(" ");

    return {
      first: parts[0] || "",
      last: parts[1] || "",
    };
  }

  async validateHeaderMatchesMyInfo() {
    const myFirst = await this.getFirstName();
    const myLast = await this.getLastName();

    const { first: headerFirst, last: headerLast } =
      await this.getHeaderFirstAndLast();

    await expect(headerFirst).toBe(myFirst);
    await expect(headerLast).toBe(myLast);
  }
}
