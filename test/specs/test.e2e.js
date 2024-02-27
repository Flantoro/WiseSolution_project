import { expect } from '@wdio/globals'
import MainPage from "./../pageobjects/MainPage.js"
import SignUpPage from '../pageobjects/SignUpPage.js'
import EnterprisePage from '../pageobjects/EnterprisePage.js'
import ResourcesPage from '../pageobjects/ResourcesPage.js'
import PricingPage from '../pageobjects/PricingPage.js'

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

    it('Second test', async () => {
        await MainPage.scrollToBottomText();
        

        await expect (MainPage.checkIfBottomTextIsVisible()).toBeTruthy();
        await expect (MainPage.checkIfBottomLinkIsVisible()).toBeTruthy();

        await MainPage.clickOnTheBottomLink();

        await expect (EnterprisePage.mainTitle).toBeDisplayed();
        await EnterprisePage.clickOnTheEnterpriseButton();
    })

    it('Third test', async () => {
        await MainPage.scrollToTheBottomSubscriveButton();
        await expect(MainPage.subscribeBottomButton).toBeDisplayed();
        await expect(MainPage.subscribeBottomButton).toBeClickable();
        await MainPage.clickOnTheBottomSubscribeButton();

        await expect(browser).toHaveUrl("https://resources.github.com/newsletter/");
        await expect(await ResourcesPage.mainTitle).toHaveText("Subscribe to our developer newsletter");

        await ResourcesPage.addEmail("sometestemail@gmail.com");
        await ResourcesPage.chooseUACountry();
        await ResourcesPage.checkTheCheckbox();
        await ResourcesPage.clickOnTheSubscribeButton();

        await expect(ResourcesPage.congratulationMessage).toHaveText("Thanks for subscribing!");
    })

    it('Fourth test', async () => {
        let value = "hello";
        await MainPage.clickOnTheInputFieldButton();
        await MainPage.fillTheinputField(value);
        await browser.pause(2000);
        await browser.keys("\uE007");
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://github.com/search?q=hello&type=repositories");
        let webElement = await $("[href='/greyli/helloflask']");
        await expect(webElement).toHaveHrefContaining(value);
    })

    it('Fifth test', async () => {
        await MainPage.clickOnThePricingButton();

        await expect(PricingPage.mainTitle).toBeDisplayed();
        await PricingPage.scrollToCompareAllFeaturesButton();
        await PricingPage.clickOnCompareAllFeaturesButton();
        await browser.pause(1000);
        await expect(PricingPage.compareFeaturesTitle).toBeDisplayedInViewport();
    })
})
