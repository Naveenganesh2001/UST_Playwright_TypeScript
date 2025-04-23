import {expect, test} from "@playwright/test";


test('Page Title', async ({page}) => {
  
  await page.goto('https://www.wikipedia.org/');

  await expect(page).toHaveTitle('Wikipedia');

});

test('English Article', async ({page}) => {

    await page.goto('https://www.wikipedia.org/');
    await page.getByTitle('English — Wikipedia — The Free Encyclopedia').click();

    await page.locator('#skin-client-pref-skin-theme-value-night').click();
});

test('Edit Text', async ({page}) => {

    await page.goto('https://www.wikipedia.org/');
    await page.getByTitle('English — Wikipedia — The Free Encyclopedia').click();
    
    await page.locator('#skin-client-pref-vector-feature-custom-font-size-value-0').click();
    await page.locator('#skin-client-pref-vector-feature-custom-font-size-value-1').click();
    await page.locator('#skin-client-pref-vector-feature-custom-font-size-value-2').click();  
});


test('View History', async ({page}) => {
    
    await page.goto('https://www.wikipedia.org/');
    await page.getByTitle('English — Wikipedia — The Free Encyclopedia').click();

    await page.locator('#vector-main-menu-dropdown-checkbox').click();
    await page.getByTitle('Learn about Wikipedia and how it works').click();

    await page.locator('#ca-history').click();
    await page.locator('//h1[@class="firstHeading mw-first-heading"]').isVisible();

});

test('Back to Main Page', async ({page}) => {

    await page.goto('https://www.wikipedia.org/');
    await page.getByTitle('English — Wikipedia — The Free Encyclopedia').click();

    await page.locator('#vector-main-menu-dropdown-checkbox').click();
    await page.getByTitle('Learn about Wikipedia and how it works').click();

    await page.locator('#ca-history').click();
    await page.locator('#vector-main-menu-dropdown-checkbox').click();
    await page.getByTitle('Visit the main page [alt-shift-z]').click();


});