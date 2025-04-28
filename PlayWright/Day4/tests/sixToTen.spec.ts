import {test} from './myFixtures';

test('Test Case 6 - Validate Pincode', async ({ todoPage }) => {
    await todoPage.goToWebsite('https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2');
    await todoPage.isOnHomePage();
    await todoPage.clickOnPincode();
    await todoPage.checkPincodeIsValid('123456');   
    await todoPage.checkPincodeIsValid('641001');

});

test('Test Case 7 - Change Language', async ({ todoPage }) => {
    await todoPage.goToWebsite('https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2');
    await todoPage.isOnHomePage();
    await todoPage.changeLanguage("TAMIL");

});

test('Test Case 8 - Change Language', async ({ todoPage }) => {
    await todoPage.goToWebsite('https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2');
    await todoPage.isOnHomePage();
    await todoPage.changeLanguage("HINDI");

});

test('Test Case 9 - Change Language', async ({ todoPage }) => {
    await todoPage.goToWebsite('https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2');
    await todoPage.isOnHomePage();
    await todoPage.changeLanguage("MALAYALAM");

});

test('Test Case 10 - Change Language', async ({ todoPage }) => {
    await todoPage.goToWebsite('https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2');
    await todoPage.isOnHomePage();
    await todoPage.changeLanguage("TELUGU");

});



