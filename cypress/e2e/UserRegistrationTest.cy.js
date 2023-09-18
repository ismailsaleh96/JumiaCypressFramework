import RegisterPage from '../Pages/RegisterPage';

before(() => {
  cy.NavigateToRegisterPage();
}) 

const rPage = new RegisterPage () 

describe('UserRegisterationJumiaHappySceaniro', () => {
  it('UserInput His Information In The First Card And Second Card', () => {

    //User Enter His Email
    rPage.emailField().type(Cypress.env('PersonalInfo').email)
    //User Click Countine Button
    rPage.FirstCountineButton().click()
    //User Enter His Password
    rPage.PasswordField().type(Cypress.env('PersonalInfo').password)
    //User Enter his password in  Confrim Password 
    rPage.ConfrimPasswordField().type(Cypress.env('PersonalInfo').ConfrimPassword)
    
    cy.wait(500)
    //User Click on Second Couninte Button
    rPage.SecondCountineButton().click()

    rPage.FirstNameField().type(Cypress.env('PersonalInfo').FirsthName)
    rPage.LastNameField().type(Cypress.env('PersonalInfo').LastName) 
    rPage.MobileNumberField().type(Cypress.env('PersonalInfo').MobileNumber)
    rPage.ThirdCountineButton().click()


    cy.wait(500)


  })



  it('UserInputHisInfoinTheThirdCardInfo', () => {

  
  //rPage.GenderDropDownList().select('1', { force: true })
  //rPage.GenderDropDownList().select("Male")

    rPage.GenderDropDownList().click()
    cy.wait(500)
    rPage.maleOption().click({ force: true })

    rPage.BirthDateCalender().type(Cypress.env('PersonalInfo').BirthDate) 
    
    rPage.ConfrimatonCheckBox().click()

    rPage.LastCountineButton().click()

    rPage.Successmessage().should('have.text','Ismail Your Account is Created Successfully')

  })

})





