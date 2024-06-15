import { registerPage } from "../../pages/registration";
const registerObj = new registerPage()
import registerData from "../../fixtures/registerData.json";

describe('test automation',()=>{



    it('registration POM',()=>{

        registerObj.openURL();
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastname)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckBox()
        registerObj.clickOnContinue()

        
    })
})

