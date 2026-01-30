import test from "@playwright/test";
import { LoginSteps } from "../../steps/LoginSteps";

test('Auth setup', async ({ page })=>{
    await page.goto('/');

    const loginSteps = new LoginSteps(page);
    await loginSteps.loginWithValidUser();
    await page.waitForURL(/.*inventory.html/);

    await page.context().storageState({path:'auth.json'});
    

});