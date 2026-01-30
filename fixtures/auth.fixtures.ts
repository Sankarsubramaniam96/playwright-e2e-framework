import { test as base,expect,Page } from "@playwright/test"

type Fixtures ={
    authPage: Page;
};

export const test = base.extend<Fixtures>({
    authPage: async ({browser}, use)=>{
        const context = await browser.newContext({storageState:'auth.json'});
        const page = await context.newPage();
        await use(page);
        await context.close();
    }
});

export {expect};