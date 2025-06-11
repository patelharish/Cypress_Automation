export class loginPage{

    weblocators = {
        //allowNtfc : '#deny',
        accountBtn : ".lbtnlogin.lbtn",
       // loginBtn: "a:contains('Log in / Register')",
        loginWithEmail: '#loginpasswordbtn',//loginpasswordbtn
        enterEmail: '#emailpass',
        enterPassword: '#userpass',
        submitBtn: '#loginfrombtnpass',
        afterLoginAccountBtn : "a[title='my account'] span"
    }   
    openURL() {
        cy.visit(Cypress.env('URL'))
    } 
    clickOnAccountBtn(){
        cy.get(this.weblocators.accountBtn).click({force: true})
    }
    clickOnLoginWithEmail(){
        cy.get(this.weblocators.loginWithEmail).click()
    }
    enterEmail(email){
        cy.get(this.weblocators.enterEmail).type(email)
    }
    enterPassword(password){
        cy.get(this.weblocators.enterPassword).type(password)
    }
    clickOnSubmit(){
        cy.get(this.weblocators.submitBtn).click()
    }
}