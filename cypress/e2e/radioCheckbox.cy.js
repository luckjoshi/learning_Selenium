describe("redioCheckbox",()=>{
it("radiobutton",()=>{
cy.visit("https://testautomationpractice.blogspot.com/")
cy.get("input.form-check-input#male").check().should("be.checked")
cy.get("input.form-check-input#female").should("not.be.checked")
})

it("checkbox",()=>{
    // for selecting & unselecting single checkbox
cy.visit("https://testautomationpractice.blogspot.com/")
cy.get("#sunday").check().should("be.checked")
cy.get("#sunday").uncheck().should("not.be.checked")
})


it("checkboxall",()=>{
// for selecting & unselecting all checkbox
cy.visit("https://testautomationpractice.blogspot.com/")
cy.get("input.form-check-input[type ='checkbox']").check().should("be.checked")
cy.get("input.form-check-input[type ='checkbox']").uncheck().should("not.be.checked")

})

it("firstlast",()=>{
// for selecting & unselecting first & last checkbox
cy.visit("https://testautomationpractice.blogspot.com/")
cy.get("input.form-check-input[type ='checkbox']").first().check()
cy.get("input.form-check-input[type ='checkbox']").last().check()
})



})