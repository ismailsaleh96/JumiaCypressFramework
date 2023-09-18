class HomePage {
    

    ThreeDashMenu() {
     return  cy.get('.col3 > .dpdw')
    }
 
    SearchInputField() {
     return  cy.xpath('//*[@id="fi-q"]')
    } 

    SearchButton() {
        return  cy.xpath(' /html/body/div[1]/header/section/form/button')
       } 
   
   }
 
 
 export default HomePage;