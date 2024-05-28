import'cypress-file-upload';
describe("fileupload",()=>{

it("singlefileupload",()=>{
cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html")
cy.get('[name="userfile"]').attachFile('forgot password.png')
cy.xpath("//h1").should("have.text","File Upload Test")


})

it("renamefile",()=>{
cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html")
cy.get('[name="userfile"]').attachFile({filePath:'forgot password.png', fileName: "forgot P/w"})

})

it("multiplefiles",()=>{
    cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html")
    cy.get('[name="userfile"]').attachFile(['forgot password.png','tree view.png'])

})

it('drag & drop',()=>{
    cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html")
    cy.get('[name="userfile"]').attachFile("tree view.png",{subjecttype:"drag-n-drop"});


})




})