describe('test', () =>{
    it('test-1', ()=>{
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type('test')
    })
})

