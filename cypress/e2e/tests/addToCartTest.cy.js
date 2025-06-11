import { addToCartPage } from "../../pages/addToCartPage";
const addToCartObj = new addToCartPage()
import loginData from '../../fixtures/loginData.json'


describe(' test automation', () => {

    it('add to cart flow', () => {
        addToCartObj.openURL({
            failOnStatusCode: false,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36'
            }
        });
        //addToCartObj.clickOnAllowNtfcn()  
        addToCartObj.clickOnViewAllBtn()
        addToCartObj.clickOnFirstProduct()
        addToCartObj.selectOnSize()
        // addToCartObj.verifyProductName().should('contain', loginData.product.productName)
        addToCartObj.clickOnAddToCartBtn()
        // addToCartObj.clickOnCartIcon()
    })
})