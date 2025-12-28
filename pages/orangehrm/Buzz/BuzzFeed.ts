import { Page, Locator } from "@playwright/test";

export class BuzzFeed {
  readonly page: Page;

  readonly tabMostRecent: Locator;
  readonly tabMostLiked: Locator;
  readonly tabMostCommented: Locator;

  readonly likes: Locator;
  readonly comments: Locator;
  readonly postDates: Locator;

  constructor(page: Page) {
    this.page = page;

    this.tabMostRecent = page.getByRole("button", { name: "Most Recent" });
    this.tabMostLiked = page.getByRole("button", { name: "Most Liked" });
    this.tabMostCommented = page.getByRole("button", {
      name: "Most Commented",
    });

    this.likes = page.locator(
      "//button[contains(@class,'buzz-post-likes')]//p"
    );

    this.comments = page.locator(
      "//button[contains(@class,'buzz-post-comment')]//p"
    );

    this.postDates = page.locator(
      "//div[contains(@class,'orangehrm-buzz-post-time')]"
    );
  }

  async openMostRecent() {
    await this.tabMostRecent.click();
  }

  async openMostLiked() {
    await this.tabMostLiked.click();
  }

  async openMostCommented() {
    await this.tabMostCommented.click();
  }
}
