describe('mouseactions',()=>{
require('@4tw/cypress-drag-drop')

it('mousehover',()=>{
cy.visit("https://demo.opencart.com/")
cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover")
cy.get(':nth-child(2) > .dropdown-toggle').trigger("mouseover")

})

// it('rightclick',()=>{


    

// })

// it('double click',()=>{




// })

 it('drag&drop',()=>{
cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
cy.get("#box1").drag("#box101",{force:true})
cy.get("#box2").drag("#box102",{force:true})
cy.get("#box3").drag("#box103",{force:true})
cy.get("#box4").drag("#box104",{force:true})
cy.get("#box5").drag("#box105",{force:true})
cy.get("#box6").drag("#box106",{force:true})
cy.get("#box7").drag("#box107",{force:true})
 })


 it.only('scrolling',()=>{
cy.visit("https://www.amazon.in/")
cy.get(".navFooterBackToTopText").scrollIntoView({duration:5000});
cy.get("#twotabsearchtextbox").scrollIntoView({duration:5000});


 })


})