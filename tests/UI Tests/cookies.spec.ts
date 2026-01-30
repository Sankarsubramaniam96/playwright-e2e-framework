import {test, expect} from "@playwright/test";
import { LoginSteps } from "../../steps/LoginSteps";

test('cookies existis only after login', async ({page})=>{
    let loginSteps: LoginSteps;
    loginSteps = new LoginSteps(page);

    await page.goto('/');
    const cookiesBefore = await page.context().cookies();
    expect(cookiesBefore.length).toBe(0);
    //console.log(cookiesBefore);

    await loginSteps.loginWithValidUser();
    const cookiesAfter = await page.context().cookies();
    expect(cookiesAfter.length).toBeGreaterThan(0);
    console.log(cookiesAfter);






});