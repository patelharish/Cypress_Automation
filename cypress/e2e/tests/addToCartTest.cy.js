import { addToCartPage } from "../../pages/addToCartPage";
const addToCartObj = new addToCartPage()
import loginData from '../../fixtures/loginData.json'


describe(' test automation', () => {
    
    it('add to cart flow', () => {
        addToCartObj.openURL({ failOnStatusCode: false })  
        //addToCartObj.clickOnAllowNtfcn()  
        addToCartObj.clickOnViewAllBtn()
        addToCartObj.clickOnFirstProduct()
        addToCartObj.selectOnSize()
       // addToCartObj.verifyProductName().should('contain', loginData.product.productName)
        addToCartObj.clickOnAddToCartBtn()
       // addToCartObj.clickOnCartIcon()
   })
})