describe('Login Test', ()=> {
    it('Login test with invalid credentials', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.waitForDom();
        cy.get("[name='username']").type("Simion")
        cy.get("[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get('.oxd-alert-content-text')
            .should('be.visible')
            .and('contain', 'Invalid credentials')


    })


});