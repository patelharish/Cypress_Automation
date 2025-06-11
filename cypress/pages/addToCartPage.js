export class addToCartPage{


    weblocators = {
        viewBtn : "Western Wear",
        firstProduct: ".product-item" ,  
        selectSize: "#option-label-size-144-item-167",
        addToCartBtn: '#product-addtocart-button',
       // cartIcon: "a[title='My Cart']",
       // productName: '.base' ,
       // banner: '//i[@class="wewidgeticon we_close icon-large"]'       
    }
    
    openURL() {
        cy.visit(Cypress.env('URL'))
    } 
    clickOnViewAllBtn(){
        cy.contains(this.weblocators.viewBtn).click()
        cy.wait(3000);
    }
    clickOnFirstProduct(){
        cy.get(this.weblocators.firstProduct).first().click()
        cy.wait(3000);
    }
    selectOnSize(){
        cy.get(this.weblocators.selectSize).click();
        cy.wait(3000);
    }
    clickOnAddToCartBtn(){
        cy.get(this.weblocators.addToCartBtn).click()
        cy.wait(3000);
    }
    /*clickOnCartIcon(){
        cy.get(this.weblocators.cartIcon).click()
    }
    verifyProductName(productName){
       return cy.get(this.weblocators.productName)
    }*/
}