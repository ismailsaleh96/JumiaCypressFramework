import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import ItemsPage from '../Pages/ItemsPage';

before(() => {
  cy.NavigateToRegisterPage();
}) 

const rPage = new RegisterPage () 
const Login = new LoginPage () 
const hPage = new HomePage () 
const IPage = new ItemsPage () 

describe('User Login With His Registered Account', () => {
  it('User Login With His Registered Account', () => {

    //User Enter His Regiserted Email
    rPage.emailField().type(Cypress.env('PersonalInfo').email)

    cy.wait(500)
    //User Click First CountineButton
    rPage.FirstCountineButton().click()

    //User Enter His Password
    Login.PasswordFieldOfLoginPage().type(Cypress.env('PersonalInfo').password)
    
    //User Click  Login Button
    Login.LoginBTN().click()

     
    hPage.SearchInputField().should('be.visible');
    hPage.SearchButton().should('be.visible');
    hPage.SearchInputField().type('Bakery')

     hPage.SearchButton().click()
    
    /*
    cy.get('[href="/groceries/"] > .text').then($element => {
      const el = $element[0];
      const hoverEvent = new MouseEvent('mouseover', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      el.dispatchEvent(hoverEvent);
    });*/
  
  })

    it('User Select Bakery Items', () => {
  
      
      hPage.SearchInputField().should('be.visible');
      hPage.SearchButton().should('be.visible');
      hPage.SearchInputField().type('Bakery')
      hPage.SearchButton().click()

    })
    
      it('User Add   Bakery Items To the cart', () => {
    
        
    IPage.BakeryItemOne().click()
    
    IPage.BakeryItemOnePrice().should('be.visible');


    //Get Item one Price
    let itemPrice;
    IPage.BakeryItemOnePrice().invoke('text').then(text => {
    itemPrice = parseFloat(text.replace('جنيه', '')); // Assuming the price is in EGP
      });


      cy.wait(500)

     //Click on Add To Cart
     IPage.AddToCartButton().click()

     
      cy.wait(500)
     

     //Click on Cart
     IPage.CardIconButton().click()

     //Get Sub Total Price
     let subtotalPrice;
     IPage.SubTotalPrice() .invoke('text') .then(text => {
        subtotalPrice = parseFloat(text.replace('جنيه', '')); // Assuming the price is in EGP
       });
     
       //Check SubTotal Price equal To Item Price
       cy.wrap(itemPrice).should('equal', subtotalPrice);
     

      })
 
})




