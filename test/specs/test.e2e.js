import { expect } from '@wdio/globals'
import MainPage from '../pageobjects/MainPage.js'
import SignUpPage from '../pageobjects/SignUpPage.js'
import RandomData from '../helpers/RandomData.js'

describe('Texlnyx Test Cases', () => {
    
    beforeEach(async ()=> {
        await browser.setWindowSize(1920, 1080);
        await browser.url('https://telnyx.com/');
    })

    it('SignUp form', async () => {
        await MainPage.clickAcceptCookies();
        await MainPage.clickSignUpButton();

        await SignUpPage.fillEmailInput(await RandomData.generateRandomEmail());
        await SignUpPage.fillFirstNameInput(await RandomData.generateRandomString());
        await SignUpPage.fillLastNameInput(await RandomData.generateRandomString());
        await SignUpPage.fillPasswordInput(await RandomData.generateRandomPassword());
        await SignUpPage.checkTermsAndConditionsCheckbox();
        await browser.pause(3000);
        await SignUpPage.clickSignUpButton();
        await browser.pause(3000);
    })
})