describe("Navigating to product page", () => {
  it("A user selects a product from the homepage", () => {
    
    cy.visit("/");
    cy.get('[data-cy="product"]').first().click()
    cy.url().should("include", "/products"); 
    cy.contains("h1", "This was priced lowest at");
  });
});

