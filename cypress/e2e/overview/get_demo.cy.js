describe("Get Method And CSS Examples", () => {
  it("should learn get() and some CSS examples", () => {
    cy.visit("https://www.letskodeit.com/practice");
    cy.get("button");
    cy.get("#name");
    cy.get(".inputs");
    cy.get("[placeholder='Enter Your Name");
    cy.get("[class='inputs displayed-class']");
    cy.get("input[id='name']");
    cy.get("input[id='name'][placeholder='Enter Your Name']");
  });
});
