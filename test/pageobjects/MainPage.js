import { expect } from "@wdio/globals";

class MainPage {
  get signUpButton() {
    return $(
      "[href='/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home']"
    );
  }
  get inputFieldButton() {
    return $("[class='flex-1'][data-target='qbsearch-input.inputButtonText']");
  }
  get inputField() {
    return $("[name='query-builder-test']");
  }
  get pricingButton() {
    return $("nav [href='/pricing']");
  }
  get bottomText() {
    return $("[class='h2-mktg mb-5']");
  }
  get bottomLink() {
    return $(
      "[href='/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+hero&ref_page=%2F']"
    );
  }
  get subscribeBottomButton() {
    return $("[class='btn-mktg mb-4 btn-muted-mktg']");
  }

  async pressSingUpButton() {
    (await this.signUpButton).click();
  }

  async scrollToBottomText() {
    (await this.bottomText).scrollIntoView();
  }

  async scrollToTheBottomSubscriveButton() {
    (await this.subscribeBottomButton).scrollIntoView();
  }

  async checkIfBottomLinkIsVisible() {
    (await this.bottomLink).isDisplayedInViewport();
  }

  async checkIfBottomTextIsVisible() {
    (await this.bottomText).isDisplayedInViewport();
  }

  async clickOnTheBottomLink() {
    (await this.bottomLink).click();
  }

  async clickOnTheBottomSubscribeButton() {
    (await this.subscribeBottomButton).click();
  }

  async clickOnThePricingButton() {
    (await this.pricingButton).click();
  }

  async clickOnTheInputFieldButton() {
    (await this.inputFieldButton).click();
  }

  async fillTheinputField(value) {
    (await this.inputField).setValue(value);
  }
}

export default new MainPage();
