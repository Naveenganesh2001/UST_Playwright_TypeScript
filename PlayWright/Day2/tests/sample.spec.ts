import {test} from '@playwright/test';


test('JSPopUp', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  await page.locator('//button[@onclick="jsAlert()"]').click();
 
  await page.waitForTimeout(3000); 
  
  page.on('dialog', dialog => dialog.accept());

  await page.waitForTimeout(3000); 

});