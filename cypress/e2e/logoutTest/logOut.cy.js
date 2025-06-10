Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

it('should log out and redirect to login page', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get("[name='username']").type("Admin");
    cy.get("[name='password']").type("admin123");
    cy.get("button[type='submit']").click();
  
   
    cy.get('.oxd-userdropdown-icon').click();
  
   
    cy.contains('Logout').click();
  
    
    cy.url({timeout:10000}).should('include', '/auth/login');
    cy.get("button[type='submit']").should('be.visible');
  });
  