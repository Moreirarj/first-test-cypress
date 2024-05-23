class DashboarPage{
    SelectorList(){
       const selectors ={
        dashboardGrid: ".orangehrm-dashboard-grid",
       }

       return selectors
    }
     checkDashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.SelectorList().dashboardGrid).should('be.visible')
     }
}

export default DashboarPage