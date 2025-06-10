it('should display validation when login with blank fields', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.waitForDom();
  
    
    cy.get("button[type='submit']").click();
    cy.get('.oxd-input-group .oxd-text.oxd-text--span')
      .should('have.length.at.least', 1); 
  
    
    cy.get("[name='username']").type("Admin");
    cy.get("button[type='submit']").click();
    cy.get('.oxd-input-group .oxd-text.oxd-text--span')
      .should('have.length.at.least', 1);
  
    
    cy.reload();
    cy.get("[name='password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get('.oxd-input-group .oxd-text.oxd-text--span')
      .should('have.length.at.least', 1);
  });
  