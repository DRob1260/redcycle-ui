context('navigate to post creation page', () => {
  it("navigates to the post creation page when the 'Post Creator' button is clicked", () => {
    cy.visit('/redcycle-ui');
    cy.get('.Home').should('be.visible');
    cy.get('.PostCreator').should('not.be.visible');
    cy.get('[href="/redcycle-ui/post-creator"]').click();
    cy.get('.PostCreator').should('be.visible');
  });
});
