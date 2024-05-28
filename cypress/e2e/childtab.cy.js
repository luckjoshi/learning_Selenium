describe('childtab',()=>{

it('approch1',()=>{
cy.visit("https://www.dummyticket.com/");
cy.xpath('/html/body/div[1]/div/div/section[2]/div/div/div[2]/div/ul[2]/li[1]/div/a').invoke('removeAttr','target').click();
cy.wait(6000)
cy.url().should('include',"https://www.dummyticket.com/difference-between-a-fake-ticket-and-a-flight-itinerary/");
cy.wait(5000)
cy.go('back');





})

})