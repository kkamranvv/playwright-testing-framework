// import { test, expect } from "../../../../fixtures/orangehrm/fixtures.js";
// import { PIMPage } from "../../../../pages/orangehrm/PIM/PIMpage.js";
// import { DeleteEmployee } from "../../../../pages/orangehrm/PIM/DeleteEmployee.js";

// test("Delete Employee", async ({ login }) => {
//   const pimPage = new PIMPage(login);
//   await pimPage.goto();

//   const delEmployee = new DeleteEmployee(login);

//   const before = await delEmployee.getRecordsCount();

//   await delEmployee.clickDeleteBtn();
//   await delEmployee.confirmDelete();

//   await login.waitForLoadState("networkidle");

//   const after = await delEmployee.getRecordsCount();

//   expect(after).toBe(before - 1);
// });
