import { loginPage } from "../../pages/loginPage";
const loginObj = new loginPage()
import loginData from '../../fixtures/loginData.json'

describe(' test automation', () => {

    it('login flow', () => {
        loginObj.openURL()  
        //loginObj.clickOnAllowNtfcn()  
        loginObj.clickOnAccountBtn()
        loginObj.clickOnLogin()
        loginObj.clickOnLoginWithEmail()
        loginObj.enterEmail(loginData.email)
        loginObj.enterPassword(loginData.password)
        loginObj.clickOnSubmit() 
        loginObj.clickOnAfterLoginBtn()
   })
})        