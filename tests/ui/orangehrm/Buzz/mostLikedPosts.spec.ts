import { test } from "../../../../fixtures/orangehrm/fixtures.js";
import { BuzzFeed } from "../../../../pages/orangehrm/Buzz/BuzzFeed.js";
import { BuzzPage } from "../../../../pages/orangehrm/Buzz/BuzzPage.js";
import { expectSortedDesc } from "../utils/sort.js";

test.describe("Buzz Most Liked", () => {
  test("posts are sorted by likes desc", async ({ login }) => {
    const page = new BuzzPage(login);

    await page.gotoBuzz();

    const buzz = new BuzzFeed(login);

    await buzz.openMostLiked();

    await login.waitForTimeout(200);

    const likeCounts = await buzz.likes.allTextContents();

    const likeNums = likeCounts.map((v) => Number(v.trim()));

    expectSortedDesc(likeNums);
  });
});
