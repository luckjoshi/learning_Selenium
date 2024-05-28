describe('table',()=>{
before('login steps',()=>{
cy.visit("https://dev.admin.encora.co/")
cy.get("#email").type("admin@encora.co")
cy.get("#password").type("K3nsington!53t19!!A2&_443")
cy.get(".login__button").click()
//cy.wait(6000)

})

it('total no of row & column',()=>{
cy.wait(4000)
cy.get('.mr-auto > .active').click()
cy.xpath("//a[text() = 'Users']").click()
//cy.get("#basic-navbar-nav > div.mr-auto.Navbar__link.navbar-nav > a.headerLink.active").click()
cy.get('table[role = "table"]>tbody>tr').should('have.length','10')
cy.get('table[role = "table"]>thead>tr>th').should ('have.length','7')
})

it('data in one cell of column & row',()=>{
   
cy.wait(4000)
cy.get('.mr-auto > .active').click()
cy.xpath("//a[text() = 'Users']").click()
// cy.get('table[role = "table"]>tbody>tr:nth-child(6)>td:nth-child(2)').should('have.value','kmandkriya@gmail.com')
cy.get('table[role = "table"]>tbody>tr:nth-child(6)>td:nth-child(2)').contains("kmandkriya@gmail.com");



})




})