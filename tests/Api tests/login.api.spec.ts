
import { test, expect } from '@playwright/test';
test('Login API returns success for valid user', async ({ request })=>{
    const response = await request.post('https://www.saucedemo.com/api/login',{
        data:{
            userName: 'standard_user',
            password: 'secret_sauce'
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('token');
});