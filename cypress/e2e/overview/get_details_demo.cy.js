describe("Get Method And CSS Examples", () => {
  it("should learn get() and some CSS examples", () => {
    cy.visit("https://www.letskodeit.com/practice");
    cy.get("input", { log: true });
    cy.get("input", { timeout: 6000 });
  });
});
