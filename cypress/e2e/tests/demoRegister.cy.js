import { registerDemoApp } from "../../pages/demoRegister";
const registerDemoAppObj = new registerDemoApp();
import demoRegisterData from "../../fixtures/demoRegister.json";

describe('automation testing',()=>{

    it('',()=>{
        registerDemoAppObj.openURL();
       // registerDemoAppObj.clickRegisterLink();
        registerDemoAppObj.setFirstName(demoRegisterData.firstName);
        registerDemoAppObj.setLastName(demoRegisterData.lastname)
        registerDemoAppObj.setEmail(demoRegisterData.email);
        registerDemoAppObj.setPassword(demoRegisterData.password);
        registerDemoAppObj.clickOnRegisterButton();
    })
})