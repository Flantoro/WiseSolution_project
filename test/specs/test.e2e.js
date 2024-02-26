import { expect } from '@wdio/globals'
import MainPage from "./../pageobjects/MainPage.js"
import SignUpPage from '../pageobjects/SignUpPage.js'

describe('GitHub Test Cases', () => {

    beforeEach(async ()=> {
        await browser.setWindowSize(1280, 1024);
        await browser.url('https://github.com/');
    })

    it('First test', async () => {
        await MainPage.pressSingUpButton();

        await expect(await SignUpPage.welcomeText).toBeDisplayed();

        await SignUpPage.emailInputField.waitForDisplayed();

        await SignUpPage.emailInput("sdfsdfrd1231fg@3244.com");
        await SignUpPage.pressEmailContinue();

        await SignUpPage.passwordInput("diofeurifhuier42323!");
        await SignUpPage.pressPasswordContinue();

        await SignUpPage.usernameInput("Flantoro1");
        await SignUpPage.pressUsernameContinue();

        await SignUpPage.emailNotificationCheck();
        await SignUpPage.pressEmailCheckContinue();
    })

})

