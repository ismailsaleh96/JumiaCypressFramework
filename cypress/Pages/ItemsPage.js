
class ItemsPage {
    

    BakeryItemOne() {
     return  cy.get(':nth-child(1) > .core > .img-c > .img')
    }
 
    BakeryItemTwo() {
     return  cy.xpath('//*[@id="fi-q"]')
    } 

    AddToCartButton() {
        return  cy.get(':nth-child(3) > .-phxs')
       } 

     CardIconButton() {
        return  cy.get('.-gy9')
       } 


    SubTotalPrice() {
     return  cy.get('.__ps-to-header > .card > .-i-ctr > .-fs20')
     }

     BakeryItemOnePrice() {
        return   cy.get('.df > .-b')
     }
   
   }
 

 export default ItemsPage;











