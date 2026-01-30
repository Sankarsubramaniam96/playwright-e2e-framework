
import { test, expect } from '../../fixtures/auth.fixtures';
test('User can access inventory page', async ({authPage})=>{
    await authPage.goto('/inventory.html');
    await expect(authPage).toHaveURL(/.*inventory.html/);
});