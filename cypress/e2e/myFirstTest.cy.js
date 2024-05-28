//const cypress = require('cypress')

describe('my first test', () => {
    it('verify the title - positive', () => {
    cy.visit('https://sapna-osondemand.orangehrm.com/auth/login')
    cy.title().should('eq','OrangeHRM')
          })
    
     it('verify the title - negative', () => {
    cy.visit('https://sapna-osondemand.orangehrm.com/auth/login')
    cy.title().should('not.eq','OrangeHRMdfsdfd')
        })      
    
        
    
  })