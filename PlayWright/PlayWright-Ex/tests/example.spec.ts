import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Clock', async ({ page }) => {

  await page.clock.setFixedTime(new Date('2024-02-02T10:00:00'));
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  await expect(page.locator('#date')).toHaveText('2/2/2024');

  await page.waitForTimeout(5000);

});

test('Dialog', async ({ page }) => { 

  await page.goto('http://127.0.0.1:5500/tests/Dialog1.html');
  await page.locator('#nextPageButton').click();
  
  page.on('dialog', dialog => dialog.accept());
  await page.getByRole('button').click();

  await page.waitForTimeout(5000);  
  
});

test('check logo', async ({ page }) => {
  await page.goto('http://localhost:5500/hello'); // Correct URL
});


