import {expect, test} from "@playwright/test";
import { log } from "console";

test('Page Title', async ({page}) => {
  // test.setTimeout(100);
  await page.goto('https://www.typescriptlang.org/');

  await expect(page).toHaveTitle('TypeScript: JavaScript With Syntax For Types.');

})

test('Click Try ts btn', async ({page}) => {
  // test.slow(); // triples the timeout --> 1000ms x 3
  await page.goto('https://www.typescriptlang.org/');

  // page.locator('#tsf > dkjbsd > divjjs')
  
  const getStarted = page.getByText('Try TypeScript Now');
  await getStarted.click();
})


test('EndToEnd', async({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('//input[@id="user-name"]').fill('standard_user');
  await page.locator('//input[@id="password"]').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('//a[@class="shopping_cart_link"]').click();
  await page.locator('#checkout').click();

  await page.locator('#first-name').fill('Naveen');
  await page.locator('#last-name').fill('Ganesh');
  await page.locator('#postal-code').fill('641001');
  await page.locator('#continue').click();

  let price =  page.locator('//div[@class="summary_total_label"]').textContent();
  console.log(price);

  await page.locator('#finish').click();


})