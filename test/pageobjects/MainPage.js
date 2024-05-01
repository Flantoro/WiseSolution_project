class MainPage {

  get getDownloadFullCoverageText(){
      return $('main div div div p').first();
  }

  get getOurNetworkFeauresSection(){
      return $('[contenttype="sectionTextCards"]');
  }

  get getResourcesButton(){
      return $('[id="radix-:Rmljm:"]');
  }

  get getComparePricingSection(){
      return $('[data-state="open"] p').eq(1);
  }

  async scrollToComparePricingSection(){
      this.getComparePricingSection.scrollIntoView();
  }

  async clickResourcesButton(){
      this.getResourcesButton.realClick();
  }

  async clickArticleButton(){
      $('[href="/resources/enterprise-cloud-data-storage"]').click();
  }

  async clickBlogButton(){
      $('[href="/resources"]').first().click();
  }

  async scrollToOurNetworkFeaturesSection(){
      this.getOurNetworkFeauresSection.scrollIntoView();
  }

  async scrollToOurNetworkButton(){
      $('footer [href="/our-network"]').scrollIntoView();
  }

  async scrollToEmailInput(){
      $('[id="email"]').scrollIntoView();
  }

  async clickOurNetworkButton(){
      $('footer [href="/our-network"]').click();
  }

  async scollToGlobalCoverageButton(){
      $('footer [href="/global-coverage"]').scrollIntoView();
  }

  async clickGlobalCoverageButton(){
      $('footer [href="/global-coverage"]').click();
  }

  async scrollToExploreText(){
      $('[action="/sign-up"]').scrollIntoView();
  }

  async clickAcceptCookies(){
      $('[id="onetrust-accept-btn-handler"]').click();
  }

  async clickSolutionsButton(){
      $('[href="/solutions"]').first().click();
  }

  async clickContactUsButton(){
      $('[href="/contact-us"]').first().click();
  }

  async clickSignUpButton(){
      $('[id="header-sign-up"]').click();
  }

  async fillEmailInput(email){
      $('[id="email"]').setValue(email);
  }

  async clickBottomSignUpButton(){
      $('[action="/sign-up"] button').first().click();
  }

  async scrollToTelnyxVSTwilioButton(){
      $('[href="/the-better-twilio-alternative"]').scrollIntoView();
  }

  async clickTelnyxVSTwilioButton(){
      $('[href="/the-better-twilio-alternative"]').click();
  }

}

export default new MainPage();
