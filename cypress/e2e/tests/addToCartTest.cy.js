import { addToCartPage } from "../../pages/addToCartPage";
const addToCartObj = new addToCartPage()

describe(' test automation', () => {

    it('add to cart flow', () => {
        addToCartObj.openURL()  
        //addToCartObj.clickOnAllowNtfcn()  
        addToCartObj.clickOnViewAllBtn()
        addToCartObj.clickOnFirstProduct()
        addToCartObj.clickOnAddToCartBtn()
        addToCartObj.clickOnCartIcon()
   })
})