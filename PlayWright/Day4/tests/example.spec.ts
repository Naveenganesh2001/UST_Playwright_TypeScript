import { test, expect } from '@playwright/test';

  test.beforeEach(async ({ page }) => {
    
    await page.goto('https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2');
  });

  
  test('Test Case 1 - Check for Title', async ({ page }) => {
    
    const title = await page.title();
    expect(title).toBe('Amazon.in Bestsellers: The most popular items on Amazon');
    
  });

 
  test('Test Case 2 - Check for a second best seller item', async ({ page }) => {
    
    const bestsellerItem = await page.locator('//span[@id="zg_banner_text"]');
    await expect(bestsellerItem).toBeVisible();

    const items = await page.locator('//li[@class="a-carousel-card"]').all();
    await items[1].click();

    const title = await page.locator('//span[@id="productTitle"]').textContent();
    console.log("Proudct Name: ",title);
    
    const price = await page.locator('(//span[@class="a-price-whole"])[1]').textContent();
    console.log("Price: ", price);
  });

  test('Test Case 3 - Most Wished Products Names', async ({ page }) => {
    
    await page.locator('//div[@class="_p13n-zg-nav-tab-all_style_zg-tabs-li-div__1YdPR"]//a[contains(text(), "Most Wished")]').click();
    const name = await page.locator('//span[@id="zg_banner_text"]').textContent();
    if (name && name.includes('Most Wished')) {
      console.log("Most Wished Amazon products are:");
      
    }

    const listOfItems = await page.locator('//div[@class="p13n-sc-truncate-desktop-type2  p13n-sc-truncated"]').all();

    for (let i = 0; i < listOfItems.length; i++) {
      const itemName = await listOfItems[i].textContent(); 
      console.log((i+1)+". "+itemName);
    }
  });

  test('Test Case 4 - Check The Cart Quantity', async ({page}) => {

    await page.locator('//i[@class="hm-icon nav-sprite"]').click();
    await page.locator('(//a[@class="hmenu-item" and contains(text(),"New Releases")])[1]').click();

    const beforeCartCount = await page.locator('//span[@id="nav-cart-count"]').textContent();
    console.log("Cart Quantity before: ", beforeCartCount);

    await page.locator('(//li[@class="a-carousel-card"])[1]').click();
    await page.locator('//input[@id="add-to-cart-button"]').click();

    const AfterCartCount = await page.locator('//span[@id="nav-cart-count"]').textContent();
    console.log("Cart Quantity before: ", AfterCartCount);


  })

  test('Test Case 5 - End To End for Mobile Phone', async ({page}) => {

    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Samsung s24");
    await page.locator('//input[@id="nav-search-submit-button"]').click();

    const listOfItems = await page.locator('//a[@class="a-link-normal s-line-clamp-2 s-link-style a-text-normal"]').all();

    for (let i = 0; i < listOfItems.length; i++) {
      const itemName = await listOfItems[i].textContent(); 
      await console.log((i+1)+". "+itemName);
    }

    //await page.locator('(//a[@class="a-link-normal s-line-clamp-2 s-link-style a-text-normal"])[1]').click();
    
    
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'), // Wait for the new window 
      page.locator('(//a[@class="a-link-normal s-line-clamp-2 s-link-style a-text-normal"])[1]').click(),
    ]);

    await newPage.locator('(//input[@id="add-to-cart-button"])[2]').click();
   // await newPage.locator('//a[@id="attach-close_sideSheet-link"]').click();
    await newPage.locator('//div[@id="nav-cart-count-container"]').click();

    const productName = await newPage.locator('//span[@class="a-truncate-cut"]').textContent();
    console.log("**************************************************************");
    console.log("Product Name: ", productName);

    const productPrice = await newPage.locator('(//span[@class="a-size-medium a-color-base sc-price sc-white-space-nowrap"])[1]').textContent();
    console.log("Product Price: ", productPrice);
    console.log("**************************************************************");

    
  })


