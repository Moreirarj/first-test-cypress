import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboarPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboarPage()


describe('Login Orange HRM Tests',() => {

    it ('Login - Fail',() => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userFail.username,userData.userFail.password)
      loginPage.checkAccessInvalid()
    
      })

      it ('Login - Sucess',() => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)
        dashboardPage.checkDashboardPage()


      })  
    
    })
    
    