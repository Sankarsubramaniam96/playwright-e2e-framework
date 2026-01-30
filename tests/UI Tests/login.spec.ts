import {test, expect, Page} from '@playwright/test';
import {LoginSteps} from '../../steps/LoginSteps';
import { invalidLoginData } from '../../utils/loginTestData';

test.describe('Login Tests', () => {
  let loginSteps: LoginSteps;

  test.beforeEach(async ({ page }: {page:Page}) => {
    loginSteps = new LoginSteps(page);
    await page.goto('/'); // Navigates to baseURL defined in playwright.config.ts
  });

  test('Should login with valid credentials', async ({ page }) => {
    await loginSteps.loginWithValidUser();
    // Add assertions to verify successful login
    await expect(page).toHaveURL(/.*inventory.html/);
  });
  test('Should not login with invalid credentials and display error message', async ({ page }) => {
    const errorMessage = await loginSteps.loginAndGetErrorMessage();
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
test.describe('Login - Data-Driven Login negative scenario Tests', () => {
  for (const data of invalidLoginData){
    test(`Should not login with ${data.userName}`, async ({page})=>{
      const loginSteps = new LoginSteps(page);
      await page.goto('/'); // Navigates to baseURL defined in playwright.config.ts
      const errorMessage = await loginSteps.loginWith(data.userName, data.passWord);
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toHaveText(data.expectedErrorMessage);
      await expect(page).toHaveURL('/');

    });

  }









});