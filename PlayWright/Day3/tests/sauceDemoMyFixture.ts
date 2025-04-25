import { LoginPage } from "./sauceDemoPage";


export async function performLogin(page: any,  username: string, password: string) {
  const loginPage = new LoginPage();
  await loginPage.login(page, username, password);
}

export {expect} from '@playwright/test';