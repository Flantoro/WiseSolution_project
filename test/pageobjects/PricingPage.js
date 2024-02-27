class PricingPage {
    get mainTitle () { return $("[class='h2-mktg']") }
    get compareAllFeaturesButton () { return $("[href='#compare-features']") }
    get compareFeaturesTitle () { return $("[class='h1']")}

    async scrollToCompareAllFeaturesButton (){
        (await this.compareAllFeaturesButton).scrollIntoView();
    }

    async clickOnCompareAllFeaturesButton () {
        (await this.compareAllFeaturesButton).click();
    }
}

export default new PricingPage()