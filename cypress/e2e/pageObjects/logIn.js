class LogIn{
    
    static clickLogIn(){
        cy.get('a[id="login2"]').click()
    }

    static enterLoginData(username, password){
        cy.get('input[id="loginusername"]').type(username)
        cy.get('input[id="loginpassword"]').type(password)
        cy.get('button[type="button"]').contains("Log in").click()
        cy.wait(2000)
    }

    static login(username, password){
        LogIn.clickLogIn()
        LogIn.enterLoginData(username, password)
    }
}

export default LogIn