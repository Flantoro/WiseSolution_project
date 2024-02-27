import { expect } from '@wdio/globals'
import MainPage from "./../pageobjects/MainPage.js"
import SignUpPage from '../pageobjects/SignUpPage.js'
import EnterprisePage from '../pageobjects/EnterprisePage.js'
import ResourcesPage from '../pageobjects/ResourcesPage.js'
import PricingPage from '../pageobjects/PricingPage.js'
import randomData from '../helpers/randomData.js'

describe('GitHub Test Cases', () => {

    beforeEach(async ()=> {
        await browser.setWindowSize(1280, 1024);
        await browser.url('https://github.com/');
    })

    xit('SignUp form', async () => {
        await MainPage.pressSingUpButton();

        await expect(await SignUpPage.welcomeText).toBeDisplayed();

        await SignUpPage.emailInputField.waitForDisplayed();

        await SignUpPage.emailInput(await randomData.generateRandomEmailName() + "@3244.com");
        await SignUpPage.pressEmailContinue();

        await SignUpPage.passwordInput("diofeurifhuier42323!");
        await SignUpPage.pressPasswordContinue();

        await SignUpPage.usernameInput("Flantoro1");
        await SignUpPage.pressUsernameContinue();

        await SignUpPage.emailNotificationCheck();
        await SignUpPage.pressEmailCheckContinue();
    })

    xit('Enterprise button', async () => {
        await MainPage.scrollToBottomText();
        

        await expect (MainPage.checkIfBottomTextIsVisible()).toBeTruthy();
        await expect (MainPage.checkIfBottomLinkIsVisible()).toBeTruthy();

        await MainPage.clickOnTheBottomLink();

        await expect (EnterprisePage.mainTitle).toBeDisplayed();
        await EnterprisePage.clickOnTheEnterpriseButton();
    })

    xit('Subscribe for a newsletters', async () => {
        await MainPage.scrollToTheBottomSubscriveButton();
        await expect(MainPage.subscribeBottomButton).toBeDisplayed();
        await expect(MainPage.subscribeBottomButton).toBeClickable();
        await MainPage.clickOnTheBottomSubscribeButton();

        await expect(browser).toHaveUrl("https://resources.github.com/newsletter/");
        await expect(await ResourcesPage.mainTitle).toHaveText("Subscribe to our developer newsletter");

        await ResourcesPage.addEmail(await randomData.generateRandomEmailName() + "@gmail.com");
        await ResourcesPage.chooseUACountry();
        await ResourcesPage.checkTheCheckbox();
        await ResourcesPage.clickOnTheSubscribeButton();

        await expect(ResourcesPage.congratulationMessage).toHaveText("Thanks for subscribing!");
    })

    it('Search for a repositories', async () => {
        let value = "hello";
        await MainPage.clickOnTheInputFieldButton();
        await MainPage.fillTheinputField(value);

        (await MainPage.inputField).waitUntil(async function () {
            return (await MainPage.inputField).getValue() === value
        })

        await browser.keys("\uE007");

        await expect(browser).toHaveUrl("https://github.com/search?q=hello&type=repositories");
        let webElement = await $("[href='/greyli/helloflask']");
        await expect(webElement).toHaveHrefContaining(value);
    })

    xit('Pricing page', async () => {
        await MainPage.clickOnThePricingButton();

        await expect(PricingPage.mainTitle).toBeDisplayed();
        await PricingPage.scrollToCompareAllFeaturesButton();
        await PricingPage.clickOnCompareAllFeaturesButton();
        await browser.pause(1000);
        await expect(PricingPage.compareFeaturesTitle).toBeDisplayedInViewport();
    })
})