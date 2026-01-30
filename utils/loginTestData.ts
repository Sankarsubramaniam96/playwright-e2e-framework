import { expect } from "@playwright/test";

export const invalidLoginData = [
    { 
      userName: 'invalid_user',
      passWord: 'secret_sauce',
      expectedErrorMessage: 'Epic sadface: Username and password do not match any user in this service'  
    },
    {
      userName: 'locked_out_user',
      passWord: 'WorngPass2243',
      expectedErrorMessage: 'Epic sadface: Username and password do not match any user in this service'  

    }


];