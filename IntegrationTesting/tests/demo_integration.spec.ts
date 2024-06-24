import { test, expect } from '@playwright/test';

test('Main Page Test', async ({ page }) => {
  await page.goto('http://localhost:3000/me');

  // find the main title on the main landing page of the site
  const welcomeStatement = page.locator("h1")
  // test to make sure the text is correct.
  await expect(welcomeStatement).toHaveText("Welcome Maine Student Book Awards Committee Members!")


  //find the button
  const getStartedButton = page.locator("a[class*='MuiButton-colorPrimary']")
  await expect(getStartedButton).toHaveText("Get Started!");
});

test('Get Started Button Click Test', async ({ page }) => {
  await page.goto('http://localhost:3000/me');

  //find the button
  const getStartedButton = page.locator("a[class*='MuiButton-colorPrimary']");
  // click the button
  await getStartedButton.click();

  await expect(page).toHaveURL("http://localhost:3000/me/signin");

  // find the sign in button and make sure it says Sign In
  const buttonSignInOut = page.locator("button");
  await expect(buttonSignInOut).toHaveText("Sign In");

  // make sure the text below the sign in page is correct
  const pPleaseSign = page.locator("html > body > div > div > div > div > div > p");
  await expect(pPleaseSign).toHaveText("Please Sign in");
});

test('SignIn button swaps text', async ({ page }) => {
  await page.goto('http://localhost:3000/me');

  //find the button
  const getStartedButton = page.locator("a[class*='MuiButton-colorPrimary']");
  // click the button
  await getStartedButton.click();

  await expect(page).toHaveURL("http://localhost:3000/me/signin");

  const buttonSignInOut = page.locator("button");
  const pPleaseSign = page.locator("html > body > div > div > div > div > div > p");

  // click the button
  await buttonSignInOut.click();

  await expect(buttonSignInOut).toHaveText("Sign Out");
  await expect(pPleaseSign).toHaveText('Welcome back, good to see you in here');

});


