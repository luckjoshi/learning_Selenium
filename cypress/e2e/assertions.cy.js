describe('implicitA', () => {
it('test1', () => {
cy.visit("https://sapna-osondemand.orangehrm.com/auth/login")
cy.title().should('eq','OrangeHRM')
.should('not.eq','Orangerrdr')
})

it('test2',() => {
cy.visit("https://sapna-osondemand.orangehrm.com/auth/login")
cy.url().should('include','orangehrm')
.should('contain','auth')
.should('eq','https://sapna-osondemand.orangehrm.com/auth/login')
})

it('test3',()=> {
cy.visit("https://sapna-osondemand.orangehrm.com/auth/login")
//cy.get('[name = username]').should('be.visible')
cy.xpath('//input[@name="username"]').should('be.visible')
cy.get('[name = password]').should('be.visible')
cy.get('.oxd-button').should('exist')
})

it('test4',()=>{
cy.visit("https://sapna-osondemand.orangehrm.com/auth/login")
cy.xpath('//input[@name="username"]').type("Admin")
cy.xpath('//input[@name="password"]').type("Sapna@123")
cy.get('.oxd-button').click()
})


})