import {test,expect} from '@playwright/test';

test('Local and session storage handeling', async ({page})=>{
    await page.goto('/');

    //write to storage
    await page.evaluate(()=>{
        localStorage.setItem('automation-key','playwright');
        sessionStorage.setItem('sessionId','qa123');
    });

    //read from storage
    const localValue = await page.evaluate(()=>{
        return localStorage.getItem('automation-key');
    });

    const sessionValue = await page.evaluate(()=>{
        return sessionStorage.getItem('sessionId');
    });
     
    expect(localValue).toBe('playwright');
    expect(sessionValue).toBe('qa123');
});
