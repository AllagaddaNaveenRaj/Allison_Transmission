//import { expect, test } from "@playwright/test";
import { expect, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
//import logger from "../utils/LoggerUtil";
//import { decrypt } from "../utils/CryptojsUtil";

//const authFile = "src/config/auth.json";

test("login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage(process.env.url!);
    await loginPage.fillUserName(process.env.UserID!);
    await loginPage.fillPassword(process.env.Password!);
   /* await loginPage.fillUserName("bzgvzy@alsn.com.preproduat");
    await loginPage.fillPWD("ATIProdTavant#12  3");*/
    
    const homePage = await loginPage.clickLoginButton();
    await homePage.expectfourWARDTitleToBeVisible();
  });

/*test("simple login test with self heal", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername_selfheal("demo_selfheal");
});

test("simple login test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername(decrypt(process.env.username!));
  await loginPage.fillPassword(decrypt(process.env.password!));
  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitleToBeVisible();
  logger.info("Test for login is completed");
  await page.context().storageState({ path: authFile });
  logger.info("Auth state is saved");
});

test.skip("Login with auth file", async ({ browser }) => {
  const context = await browser.newContext({ storageState: authFile });
  const page = await context.newPage();
  await page.goto(
    "https://mukunthanr2-dev-ed.lightning.force.com/lightning/page/home"
  );
  await expect(page.getByRole("link", { name: "Accounts" })).toBeVisible();
});*/

/* test.skip("To print", async ({ page }) => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.UserID);
    console.log(process.env.Password);
  });*/