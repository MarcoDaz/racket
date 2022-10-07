describe("Home page", () => {
  it("has a title", () => {
    cy.visit("/");
    cy.get(".navbar-brand").should("contain", "Racket");
  });
});
