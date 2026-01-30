import { test, expect } from '@playwright/test';

test('Inventory API failure shows error UI', async ({ page }) => {

  await page.route('**/inventory*', async route => {
    await route.fulfill({
      status: 500,
      body: JSON.stringify({
        error: 'Internal Server Error'
      })
    });
  });

  await page.goto('/inventory.html');

  // Example assertion – adapt based on UI behavior
  await expect(page.locator('.inventory_item')).toHaveCount(0);
});
