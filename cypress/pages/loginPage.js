export class loginPage{

    weblocators = {
        allowNtfc : '#deny',
        accountBtn : "a[title='my account'] span",
        loginBtn: "a:contains('Log in / Register')",
        loginWithEmail: '#loginpasswordbtn',
        enterEmail: '#emailpass',
        enterPassword: '#userpass',
        submitBtn: '#loginfrombtnpass',
        afterLoginAccountBtn : "a[title='my account'] span"
    }   
    openURL() {
        cy.visit(Cypress.env('URL'))
    } 
    clickOnAllowNtfcn(){
        cy.get(this.weblocators.allowNtfc).click()
    }
    clickOnAccountBtn(){
        cy.get(this.weblocators.accountBtn).click()
    }
    clickOnLogin(){
        cy.get(this.weblocators.loginBtn).click()
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