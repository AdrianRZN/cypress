describe('Login - Valid Credentials', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('logs in with valid credentials from users.json', () => {
    cy.fixture('users.json').then((users) => {
      const validUser = users.find(u => u.role === 'admin');
      cy.get("[name='username']").type(validUser.username);
      cy.get("[name='password']").type(validUser.password);
      cy.get("button[type='submit']").click();
      cy.get('img[alt="client brand banner"]').should('be.visible');
    });
  });
});
