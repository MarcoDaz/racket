describe("Navigating to product page", () => {
  it("A user selects a product from the homepage", () => {
    
    cy.visit("/");
    cy.get("#href='products/633f3088e503050a36cf-'")
      .invoke('attr', 'href')
      .then(href => {
        cy.visit(href);
      });
    cy.url().should("include", "/products"); 
    cy.contains("h1", "current price");
  });
});

