import { Locator, Page } from "@playwright/test";

export class LoginPage{
    private readonly page:Page;
    
    private readonly userName: Locator;
    private readonly passwordField: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page:Page){
        this.page = page;

        this.userName = page.locator("[id='user-name']");
        this.passwordField = page.locator("[id='password']");
        this.loginButton =page.locator("[id='login-button']");
        this.errorMessage = page.locator("[data-test='error']");
    }

    async enterUsername(username: string) {
    await this.userName.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage() {
    return this.errorMessage;
  }
    
}