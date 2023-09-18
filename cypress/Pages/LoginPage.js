class LoginPage {
    

     PasswordFieldOfLoginPage() {
      return  cy.get('.mdc-text-field__input')
     }
  
     LoginBTN() {
      return  cy.get('#loginButton > .mdc-button__touch')
     } 
   
    }
  
  
  export default LoginPage;
  
  
  
  
  