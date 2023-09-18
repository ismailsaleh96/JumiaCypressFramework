class RegisterPage {
  emailField() {
    return cy.get('#input_identifierValue')
}

FirstCountineButton(){
return cy.get('.ctx-identification > :nth-child(3)')
}

PasswordField() {
  return cy.get('#card_password > :nth-child(3) > .mdc-text-field > .mdc-text-field__input')
}

ConfrimPasswordField() {
   return cy.get('#card_password > :nth-child(4) > .mdc-text-field > .mdc-text-field__input')
}

SecondCountineButton() {
  return cy.get('#card_password > .actions')
}

FirstNameField() {
  return cy.get('#input_first_name')

}

LastNameField() {
 return cy.get('#input_last_name')
}

MobileNumberField() {
return  cy.get('.phone-number-field > .mdc-text-field')
 }

 ThirdCountineButton() {
  return  cy.get('#card_profile_details > .actions')
  
  }

  GenderDropDownList() {
    return cy.get('#input_gender')
  
  }

  maleOption() {
    cy.get('[data-value="M"] > .mdc-deprecated-list-item__text')
  }
  
 /* BirthDateCalender() {
   return cy.get('.center > .actions')
  }
*/
  BirthDateCalender() {
    return cy.get('#input_birth_date')
   }

  
  LastCountineButton() {
  return  cy.get('.phone-number-field > .mdc-text-field')
   }
  
   ConfrimatonCheckBox() {
    return  cy.get('#acceptTC')
   }

   Successmessage() {
    return  cy.get('#card_profile_details > .actions')

   } 
 
  }


export default RegisterPage;




