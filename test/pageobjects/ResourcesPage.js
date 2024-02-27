class ResourcesPage {
  get mainTitle() {
    return $("div h1");
  }
  get emailInput() {
    return $("[placeholder='you@company.com']");
  }
  get uaCountryOption() {
    return $("[value='UA']");
  }
  get congratulationMessage() {
    return $("div h1");
  }
  get checkbox() {
    return $("[name='marketingEmailOptin1']");
  }
  get subscribeButton() {
    return $("button span span");
  }

  async addEmail(value) {
    (await this.emailInput).addValue(value);
  }

  async chooseUACountry() {
    (await this.uaCountryOption).click();
  }

  async checkTheCheckbox() {
    (await this.checkbox).click();
  }

  async clickOnTheSubscribeButton() {
    (await this.subscribeButton).click();
  }
}

export default new ResourcesPage();