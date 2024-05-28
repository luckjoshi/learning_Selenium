
describe('csslocators',()=>{
it('test-1',()=>{
cy.visit("https://www.amazon.in/")
cy.get("#twotabsearchtextbox").type('mobile')
cy.get("#nav-search-submit-button").click()

    })

})