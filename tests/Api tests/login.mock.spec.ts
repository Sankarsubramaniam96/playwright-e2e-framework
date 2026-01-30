import { test, expect } from '@playwright/test';

test('Mock login flow and bypass backend', async ({ page }) => {

  await page.route('**/*', route => route.continue());

  await page.goto('/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Simulate successful login by setting cookie
  await page.context().addCookies([{
    name: 'session-username',
    value: 'standard_user',
    domain: 'www.saucedemo.com',
    path: '/'
  }]);

  await page.click('#login-button');

  await page.goto('/inventory.html');

  await expect(page).toHaveURL(/inventory.html/);
});
