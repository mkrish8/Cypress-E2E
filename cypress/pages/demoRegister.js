export class registerDemoApp{


    webLocators = {
       // registerLink:'Register',
        firstName:'#FirstName',
        lastName:'#LastName',
        password:'#Password',
        cnfPassword:'#ConfirmPassword',
        registerButton:'#register-button',
        eId:'#Email'
    }
 
    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    // clickRegisterLink(){
    //     cy.get(this.webLocators.registerLink).click()
    // }

    setFirstName(fname){
        cy.get(this.webLocators.firstName).type(fname,{delay:0})
    }

    setLastName(lname){
        cy.get(this.webLocators.lastName).type(lname,{delay:0})
    }

    setPassword(pwd){
        cy.get(this.webLocators.password).type(pwd)
        cy.get(this.webLocators.cnfPassword).type(pwd)

    }

    setEmail(e){
        cy.get(this.webLocators.eId).type(e,{delay:0})
    }

    clickOnRegisterButton(){
        cy.get(this.webLocators.registerButton).click()
    }
}