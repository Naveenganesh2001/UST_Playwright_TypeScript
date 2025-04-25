import { test, expect } from '@playwright/test';
import { todo } from 'node:test';

/*
test.beforeEach(async ({ TodoPage }) => {
  //await TodoPage.
})*/

//test.describe.configure({ mode: 'parallel' }) // serial

// built in fixtures --> page, context, browser, browserName, request

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

import { performLogin} from './sauceDemoMyFixture';

test('Login Test', async ({ page }) => {
  // Navigate to the login page
  page.goto('https://www.saucedemo.com/');

  
  await performLogin(page, 'standard_user', 'secret_sauce');

  
  //(await page.url()).toBe('https://yourwebsite.com/dashboard'); // Expected URL after login
});

test('has title1', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title2', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

