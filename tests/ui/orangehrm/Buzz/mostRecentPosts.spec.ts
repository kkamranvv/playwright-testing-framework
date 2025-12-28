import { test, expect } from "../../../../fixtures/orangehrm/fixtures.js";
import { BuzzFeed } from "../../../../pages/orangehrm/Buzz/BuzzFeed.js";
import { BuzzPage } from "../../../../pages/orangehrm/Buzz/BuzzPage.js";

test.describe("Buzz Most Recent", () => {
  test("posts are sorted by date desc", async ({ login }) => {
    const page = new BuzzPage(login);

    await page.gotoBuzz();

    const buzz = new BuzzFeed(login);

    await buzz.openMostRecent();

    await login.waitForTimeout(200);

    const dates = await buzz.postDates.allTextContents();

    const timestamps = dates.map((d) => Date.parse(d));

    const sorted = [...timestamps].sort((a, b) => b - a);

    expect(timestamps).toEqual(sorted);
  });
});
