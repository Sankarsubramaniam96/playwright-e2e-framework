import { test, expect } from '@playwright/test';

test('Inventiory API partial data mock', async ({ page }) => {

    await page.route('**/inventory*', async route => {
        const response = await route.fetch();
        const json = await response.json();

        // Modify only what needed
        json.inventory[0].price = 0;

        await route.fulfill({
            status: response.status(),
            headers: response.headers(),
            body: JSON.stringify(json)
        });
        })

    });