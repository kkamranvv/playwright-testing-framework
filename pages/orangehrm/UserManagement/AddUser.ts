import { Page, Locator } from "@playwright/test";

export class AddUser {
  readonly page: Page;
  readonly userRole: Locator;
  readonly employeeName: Locator;
  readonly status: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly saveBtn: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userRole = page.locator(
      "//label[text()='User Role']/following::div[contains(@class,'oxd-select-text-input')][1]"
    );

    this.employeeName = page.locator(
      "//input[@placeholder='Type for hints...']"
    );

    this.status = page.locator(
      "//label[text()='Status']/following::div[contains(@class,'oxd-select-text-input')][1]"
    );

    this.username = page.locator(
      "//label[text()='Username']/following::input[1]"
    );

    this.password = page.locator("(//input[@type='password'])[1]");
    this.confirmPassword = page.locator("(//input[@type='password'])[2]");

    this.saveBtn = page.locator("//button[normalize-space()='Save']");

    this.errorMessage = page.locator(
      "//span[contains(@class,'oxd-input-field-error-message')]"
    );
  }

  async addUser(username: string, password: string, confirmPassword: string) {
    await this.userRole.click();

    await this.page.locator("//div[@role='listbox']").waitFor();

    await this.page
      .locator("//div[@role='option' and normalize-space()='ESS']")
      .click();

    await this.employeeName.fill("K");

    await this.page.locator("//div[@role='listbox']").waitFor();

    const empOption = this.page.locator(
      "//div[@role='option' and normalize-space()='Ranga Akunuri']"
    );

    await empOption.waitFor();
    await empOption.click();

    await this.status.click();

    await this.page.locator("//div[@role='listbox']").waitFor();

    await this.username.fill(username);

    await this.password.fill(password);

    await this.confirmPassword.fill(confirmPassword);
  }
}
