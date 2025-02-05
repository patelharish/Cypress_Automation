export class addToCartPage{


    weblocators = {
        viewBtn : "(//a[text()='view all'])[1]",
        firstProduct: "(//li[@class='item product product-item'])[1]" ,   
        addToCartBtn: '#product-addtocart-button',
        cartIcon: "a[title='My Cart']",
        productName: '.base' ,
        banner: '//i[@class="wewidgeticon we_close icon-large"]'       
    }
    
    openURL() {
        cy.visit(Cypress.env('URL'))
    } 
    clickOnBanner(){
        cy.xpath(this.weblocators.banner).click()
    }
    clickOnViewAllBtn(){
        cy.xpath(this.weblocators.viewBtn).click()
    }
    clickOnFirstProduct(){
        cy.xpath(this.weblocators.firstProduct).click()
    }
    clickOnAddToCartBtn(){
        cy.get(this.weblocators.addToCartBtn).click()
    }
    clickOnCartIcon(){
        cy.get(this.weblocators.cartIcon).click()
    }
    verifyProductName(productName){
       return cy.get(this.weblocators.productName)
    }
}