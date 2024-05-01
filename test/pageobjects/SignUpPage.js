class SignUpPage{

  get getEmailValidationMessage(){
      return $('[id="email_message"]');
  }

  get getMinPasswordValidationMessage(){
      return $('[id="passwordMinLength"]');
  }

  get getRecaptchaError(){
      return $('[aria-describedby="error"]');
  }

  get getConditionsTitle(){
      return $('[contenttype="heroOverview"] h1');
  }

  get getFirstNameValidationMessage(){
      return $('[id="first_name_message"]');
  }

  get getLastNameValidationMessage(){
      return $('[id="last_name_message"]');
  }

  get getPasswordValidationMessage(){
      return $('[id="password_message"]');
  }

  get getTermsAndConditionsValidationMessage(){
      return $('[id="terms_and_conditions_message"]');
  }

  get getEmailInput(){
      return $('[id="email"]');
  }

  async fillEmailInput(email){
    (await $('[id="email"]')).setValue(email);
  }

  async fillFirstNameInput(firstName){
    (await $('[id="first_name"]')).setValue(firstName);
  }

  async fillLastNameInput(lastName){
    (await $('[id="last_name"]')).setValue(lastName);
  }

  async fillPasswordInput(password){
    (await $('[id="password"]')).setValue(password);
  }

  async checkTermsAndConditionsCheckbox(){
    (await $('[id="terms_and_conditions"]')).click();
  }

  async clickSignUpButton(){
    await $('[type="submit"]').click();
  }

  async doubleClickSignUpButton(){
      $('[type="submit"]').first().click();
      cy.wait(100);
      $('[type="submit"]').first().click();
  }

  async clickTermsAndConditionsButton(){
      $('[for="terms_and_conditions"] a').first().invoke('removeAttr', 'target').click();
  }
}

export default new SignUpPage();