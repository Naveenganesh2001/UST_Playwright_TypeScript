import {expect, test} from "@playwright/test";


test('Page Title', async ({page}) => {
  
  await page.goto('https://www.snapdeal.com/');

  await expect(page).toHaveTitle('Shop Online for Men, Women & Kids Clothing, Shoes, Home Decor Items');

});

test('Pincode', async ({page}) => {
  
    await page.goto('https://www.snapdeal.com/');

    await page.locator('#pincode-check-nba').fill("641001");
    await page.locator('//button[@class="btn btn-theme-secondary pincodeNbaSubmit button--reject nextBestActionTrack col-xs-16"]').click();
   
});

test('Search Shirts', async ({page}) => {

    await page.goto('https://www.snapdeal.com/');

    await page.locator('#inputValEnter').fill("Shirts");
    await page.locator('//button[@class="searchformButton col-xs-4 rippleGrey"]').click();

});

test('Blog', async ({page}) => {

    await page.goto('https://www.snapdeal.com/');

    await page.locator('(//a[@class="dp-widget-link hookLink"])[1]').click();
    await page.locator('(//img[@class="custom-logo"])[1]').isVisible();

});

test('Cart', async ({page}) => {

    await page.goto('https://www.snapdeal.com/');

    await page.locator('//div[@class="cartInner"]').click();
    await page.locator('//a[@title="Mobile Phones"]').click();

    await page.locator('//label[@for="CompatiblePhoneModel_s-Apple iPhone 11 Pro Max"]').click();

});