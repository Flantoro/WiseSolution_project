class EnterprisePage {
    get mainTitle () { return $("[class='d-md-block mt-0 mb-3 text-center h1 lh-condensed-ultra ']") }
    get enterpriseCloudButton () { return $("[class='position-absolute left-0 right-0 h5 text-center text-uppercase color-fg-on-emphasis js-recommended-plan-caption']") }


    async clickOnTheEnterpriseButton () {
        (await this.enterpriseCloudButton).click();
    }
}

export default new EnterprisePage()