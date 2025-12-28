import { test, expect } from "../../../../fixtures/orangehrm/fixtures.js";
import { AddPost } from "../../../../pages/orangehrm/Buzz/AddPost.js";
import { BuzzPage } from "../../../../pages/orangehrm/Buzz/BuzzPage.js";

test.describe("Buzz - Add Post", () => {
  test("Add Post", async ({ login }) => {
    const page = new BuzzPage(login);

    await page.gotoBuzz();

    const add = new AddPost(login);

    await expect(add.postTextArea).toBeVisible();

    const postText = `Auto post ${Date.now()}`;

    await add.addPost(postText);

    const createdPost = add.getPostByText(postText);
    await expect(createdPost).toBeVisible();
  });
});
