import { expect } from "@wdio/globals";

class SignUpPage {
  get welcomeText() {
    return $("[data-target='typing-effect.content']");
  }
  get emailInputField() {
    return $("[id='email']");
  }
  get emailContinueButton() {
    return $("[data-continue-to='password-container']");
  }
  get passwordInputField() {
    return $("[id='password']");
  }
  get passwordContinueButton() {
    return $("[data-continue-to='username-container']");
  }
  get usernameInputField() {
    return $("[id='login']");
  }
  get usernameContinueButton() {
    return $("[data-continue-to='opt-in-container']");
  }
  get emailNotificationCheckbox() {
    return $(
      "[class='color-fg-on-emphasis f4 text-mono text-normal position-relative pl-2']"
    );
  }
  get emailNotificationContinueButton() {
    return $("[data-continue-to='captcha-and-submit-container']");
  }

  async emailInput(value) {
    (await this.emailInputField).setValue(value);
  }

  async pressEmailContinue() {
    await this.emailContinueButton.waitForClickable();
    (await this.emailContinueButton).click();
  }

  async passwordInput(value) {
    await (await this.passwordInputField).waitForDisplayed();
    (await this.passwordInputField).setValue(value);
  }

  async pressPasswordContinue() {
    await this.passwordContinueButton.waitForClickable();
    (await this.passwordContinueButton).click();
  }

  async usernameInput(value) {
    await this.usernameInputField.setValue(value);
  }

  async pressUsernameContinue() {
    await this.usernameContinueButton.waitForClickable();
    (await this.usernameContinueButton).click();
  }

  async emailNotificationCheck() {
    await this.emailNotificationCheckbox.waitForClickable();
    (await this.emailNotificationCheckbox).click();
  }

  async pressEmailCheckContinue() {
    await this.emailNotificationContinueButton.waitForClickable();
    (await this.emailNotificationContinueButton).click();
  }
}

export default new SignUpPage();
