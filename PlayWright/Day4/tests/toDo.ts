import {  Locator, Page } from "@playwright/test";
import { expect as playwrightExpect } from "@playwright/test";


export class TodoPage {

    private readonly homePageElement: Locator;
    private readonly getPincode: Locator; 
    private readonly getPincodeInput: Locator;
    private readonly getLanguageBtn: Locator;

    constructor(public readonly page: Page) {
        this.homePageElement = page.locator('//span[@id="zg_banner_text"]');
        this.getPincode = page.locator('//a[@id="nav-global-location-popover-link"]');  
        this.getPincodeInput = page.locator('//input[@id="GLUXZipUpdateInput"]');  
        this.getLanguageBtn = page.locator('//div[@id="icp-nav-flyout"]');  
    };

    async goToWebsite(url: string) {
        await this.page.goto(url);
    };

    async isOnHomePage() {
        const isVisible = await this.homePageElement.isVisible();
        if (isVisible) {
            console.log("Home page is visible");
        } else {
            console.log("Home page is not visible");
        }
    };
    
    async clickOnPincode() {
        await this.getPincode.click();
    };

    async checkPincodeIsValid(pincode: string) {
        await this.getPincodeInput.fill(''); // Clear the input field before entering a new pincode
        await this.getPincodeInput.fill(pincode);
        await this.getPincodeInput.press('Enter');

        const valueToSearch = pincode; // The value you want to search for in the input field
        const dynamicXpath = `//input[@value='${valueToSearch}']`;

        const element = await this.page.locator(dynamicXpath);

        if(await expect(element).toBeVisible())  
        {
            console.log("Pincode is Valid");
        } else {
            console.log("Pincode is InValid");
        }
       
        
    };

    async changeLanguage(language : string) {
        await this.getLanguageBtn.click();
        const languageOptions = await this.page.locator('//span[@class="a-label a-radio-label"]//span//span').all();
        for (let i = 0; i < languageOptions.length; i++) {
            const optionText = await languageOptions[i].textContent();
            if (optionText && language.includes(optionText)) {
                await languageOptions[i].click();
                console.log("Language changed to: ", language);
                break;
            }
        }
        //await this.page.waitForTimeout(6000);
        await this.page.locator('//input[@class="a-button-input"]').click();
        //await this.page.waitForTimeout(6000);
          

    };




}
    function expect(element: Locator) {
        return {
            async toBeVisible() {
                try {
                    await playwrightExpect(element).toBeVisible();
                    return true;
                } catch {
                    return false;
                }
            }
        };
    }


