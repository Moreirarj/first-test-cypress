class LoginPage {
    SelectorList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton:   "[type='submit']",
            wrongCredentialAlert: ".oxd-alert--error",

        }
        return selectors
    }
    
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password){
        cy.get(this.SelectorList().usernameField).type(username)
        cy.get(this.SelectorList().passwordField).type(password)
        cy.get(this.SelectorList().loginButton).click()

    }

}

export default LoginPage