import {expect, test} from "@playwright/test";

test('Page Title', async ({page}) => {
  
  await page.goto('https://github.com/aryan1403');

  await expect(page).toHaveTitle("aryan1403 (Aaryan) · GitHub");

});

test('Connect', async ({page}) => {

    await page.goto('https://github.com/aryan1403');

   await page.locator('//a[text()="Connect with me"]').click();
});

test('Follow', async ({page}) => {

    await page.goto('https://github.com/aryan1403');

    await page.locator('//a[@class="btn btn-block"]').click();
});

test('Repo', async ({page}) => {

    await page.goto('https://github.com/aryan1403');

    await page.locator('(//a[@data-selected-links="repositories /aryan1403?tab=repositories"])[1]').click();
    await page.locator('//span[text()="Sort"]').click();
    await page.locator('//span[text()="Name"]').click();

});

test('Stars', async ({page}) => {

    await page.goto('https://github.com/aryan1403');

    await page.locator('(//a[@data-selected-links="stars /aryan1403?tab=stars"])[1]').click();
    await page.locator('//span[text()="Sort"]').click();
    await page.locator('(//a[@data-pjax="#profile-lists-container"])[3]').click();

});
