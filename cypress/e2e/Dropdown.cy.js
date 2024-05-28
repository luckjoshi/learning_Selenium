describe('dropdown',()=>{

it('dropdown with select',()=>{
cy.visit("https://testautomationpractice.blogspot.com/")
cy.get('#country').select("India")
.should('have.value','india')
    })
it("dropdown without select",()=>{
cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
cy.get("#select2-reasondummy-container").click()
cy.get(".select2-search__field").type("Visa application").type('{enter}')
// cy.get("#select2-reasondummy-container").should('have.text','Visa applicationx')

})

it('Auto suggetion dropdown',()=>{
cy.visit("https://www.wikipedia.org/")
cy.get("#searchInput[accesskey ='F']").type("delhi")
cy.get('a.suggestion-link').contains('Delhi University').click()

})




})