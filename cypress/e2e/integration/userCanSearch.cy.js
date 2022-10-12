describe("Searching for products", () => {
  it("searches for milk within the racket database", () => {
    cy.visit("/");
    cy.get('[name="searchTerm"]').click().type("milk")
    cy.url().should("include", "/");
    cy.contains("h4", "Milk");
  })
  it("searches for eggs within the racket database", () => {
    cy.visit("/");
    cy.get('[name="searchTerm"]').click().type("eggs")
    cy.url().should("include", "/");
    cy.contains("h4", "Eggs");
  })
})