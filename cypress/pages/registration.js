export class registerPage{

    webLocators={
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        emailId:'#input-email',
        telePhone:'#input-telephone',
        password:'#input-password',
        confirmPassword:'#input-confirm',
        policyCheckBox:'input[name="agree"]',
        continueButton:'input[type="submit"]'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.webLocators.firstName).type(FName)
    }
    
    enterLastName(LName){
        cy.get(this.webLocators.lastName).type(LName)
    }

    enterEmail(Email){
        cy.get(this.webLocators.emailId).type(Email)
    }

    enterTelephone(telephone){
        cy.get(this.webLocators.telePhone).type(telephone)
    }

    enterPassword(pwd){
        cy.get(this.webLocators.password).type(pwd)
        cy.get(this.webLocators.confirmPassword).type(pwd)
    }

    selectCheckBox(){
        cy.get(this.webLocators.policyCheckBox).check()
    }

    clickOnContinue(){
        cy.get(this.webLocators.continueButton).click()
    }
}