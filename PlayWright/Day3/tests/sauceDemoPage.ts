import {  Page } from '@playwright/test';

export class LoginPage {
  usernameLocator: string;
  passwordLocator: string;
  loginButtonLocator: string;

  constructor() {
    // Initialize locators
    this.usernameLocator = '#user-name';  
    this.passwordLocator = '#password';  
    this.loginButtonLocator = '#login-button'; 
  };

  

  // Method to perform the login operation
  async login(page: Page, username: string, password: string) {
    await page.fill(this.usernameLocator, username);
    await page.fill(this.passwordLocator, password);
    await page.click(this.loginButtonLocator);
  };
  
}
