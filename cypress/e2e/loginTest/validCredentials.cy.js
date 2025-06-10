describe('Login Test', ()=> {
    it('Login test with valid credentials', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.waitForDom();
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get('img[alt="client brand banner"]')
            .should('be.visible')
            .log('Login successful')


    })


});