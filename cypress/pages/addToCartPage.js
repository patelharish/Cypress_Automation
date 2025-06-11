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
    
    openURL(options = {}) {
        cy.visit(Cypress.env('URL'), options)
    } 
    clickOnViewAllBtn(){
        cy.contains(this.weblocators.viewBtn).click()
    }
    clickOnFirstProduct(){
        cy.get(this.weblocators.firstProduct).first().click()
    }
    selectOnSize(){
        cy.get(this.weblocators.selectSize).click();
    }
    clickOnAddToCartBtn(){
        cy.get(this.weblocators.addToCartBtn).click()
    }
    /*clickOnCartIcon(){
        cy.get(this.weblocators.cartIcon).click()
    }
    verifyProductName(productName){
       return cy.get(this.weblocators.productName)
    }*/
}