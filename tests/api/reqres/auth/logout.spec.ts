import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { testData } from "../testData.js";

test("Logout User", async ({ request }) => {
  const { logout } = testData.auth;

  const res = await request.post(endpoints.logout, {
    data: logout,
  });

  expect(res.status()).toBe(200);
  expect(res.ok()).toBeTruthy();
});
