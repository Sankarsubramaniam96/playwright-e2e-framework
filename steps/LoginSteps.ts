import { Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ValidUserCredentials,InvalidUserCredentials,ValidPassword,InvalidPassword } from "../utils/dataUtils";

export class LoginSteps {
    private loginPage: LoginPage;

     constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async loginWithValidUser() {
    await this.loginPage.login(ValidUserCredentials.StandardUser, ValidPassword.Password123);
  }

  async loginWithInvalidUser() {
    await this.loginPage.login(InvalidUserCredentials.InvalidUser1, InvalidPassword.WrongPassword1);
  }

  async loginAndGetErrorMessage() {
    await this.loginWithInvalidUser();
    return this.loginPage.getErrorMessage();
  }

  async loginWith(username: string, password: string) {
    await this.loginPage.login(username, password);
    return this.loginPage.getErrorMessage();
  }
}