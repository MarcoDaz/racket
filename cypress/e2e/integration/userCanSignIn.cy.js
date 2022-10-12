describe("Authentication", () => {
  it("A user signs in and is redirected to /", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#signedUpemail").type("someone@example.com");
    cy.get("#signedUppassword").type("password");
    cy.get("#signedUpsubmit").click();

    cy.url().should("include", "/");
    cy.contains("h4", "Butter");
  });
});