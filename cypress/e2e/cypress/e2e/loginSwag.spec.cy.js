describe ('Swag Labs', () => {
    Cypress.config('defaultCommandTimeout', 4000)  // 4 segundos
    
    it('Login With Success',() =>{
    cy.visit ('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').should('be.visible').type('standard_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('#login-button').should('be.visible').click()
    alert("Erro de Login");
    })
     
})


    it('Login Fail',() => {
    cy.visit ('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').should('be.visible').type('problem_user')
    cy.get('[data-test="password"]').should('be.visible').type('teste')
    cy.get('#login-button').should('be.visible').click()
    
    cy.wait(2000);
    


})







