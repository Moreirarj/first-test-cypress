import userData from '../fixtures/userData.json'

describe('Orange HRM Tests',() => {

  const selectorsList = {
     usernameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton:   "[type='submit']",
     sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
     wrongCredentialAlert: ".oxd-alert--error",
     myInfoButton: '[href= "/web/index.php/pim/viewMyDetails"]',
     firstNameField: "[name='firstName']",
     lastNameField: "[name='lastName']",
     genericField: ".oxd-input--active",
     dateField: "[placeholder='yyyy-dd-mm']",
     genericComboBox: ".oxd-select-text--active",
     secondIntemCombobox:'.oxd-select-dropdown > :nth-child(11)',
     thirdIntemCombobox:'.oxd-select-dropdown > :nth-child(3)',
     //dateCloseButton: ".--close",
     submitButton: "[type='submit']",
     }
it.only ('User Info Update - Success',() =>{

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('EmplIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriverLicenseNumberTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2024-08-12')
   // cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumberTest')
    //cy.get(selectorsList.genericField).eq(9).clear().type('sinNumberTest')
    //cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})


    cy.get(selectorsList.genericComboBox).eq(0).click({force: true})
    cy.get(selectorsList.secondIntemCombobox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({force: true})
    cy.get(selectorsList.thirdIntemCombobox).click()
    
    
    
    })

    it ('Login - Fail',() =>{
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type(userData.userFail.username)
        cy.get(selectorsList.passwordField).type(userData.userFail.password)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert)
    
      })
    
    })
    
    