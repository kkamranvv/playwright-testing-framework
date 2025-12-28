// import { test } from "../../../../fixtures/orangehrm/fixtures.js";
// import { BuzzFeed } from "../../../../pages/orangehrm/Buzz/BuzzFeed.js";
// import { BuzzPage } from "../../../../pages/orangehrm/Buzz/BuzzPage.js";
// import { expectSortedDesc } from "../utils/sort.js";

// test.describe("Buzz Most Commented", () => {
//   test("posts are sorted by comments desc", async ({ login }) => {
//     const page = new BuzzPage(login);

//     await page.gotoBuzz();

//     const buzz = new BuzzFeed(login);

//     await buzz.openMostCommented();

//     await login.waitForTimeout(200);

//     const commentCounts = await buzz.comments.allTextContents();

//     const commentNums = commentCounts.map((v) => Number(v.trim()));

//     expectSortedDesc(commentNums);
//   });
// });
