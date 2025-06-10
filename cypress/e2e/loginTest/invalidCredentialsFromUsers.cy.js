describe('Login - Invalid Credentials', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('shows error for invalid credentials from users.json', () => {
    cy.fixture('users.json').then((users) => {
      const invalidUser = users.find(u => u.role === 'invalid');
      cy.get("[name='username']").type(invalidUser.username);
      cy.get("[name='password']").type(invalidUser.password);
      cy.get("button[type='submit']").click();
      cy.get('.oxd-alert-content-text').should('be.visible')
        .and('contain', 'Invalid credentials');
    });
  });
});
