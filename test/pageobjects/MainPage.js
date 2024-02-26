import { expect } from '@wdio/globals'

class MainPage {

    get signUpButton () { return $("[href='/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home']") }
    get inputField () { return $("[class='flex-1'][data-target='qbsearch-input.inputButtonText']") }
    get pricingButton () { return $("nav [href='/pricing']") }


    async pressSingUpButton () {
        (await this.signUpButton).click();
    }

}

export default new MainPage()