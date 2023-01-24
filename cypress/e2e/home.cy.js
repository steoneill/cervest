/// <reference types="cypress" />
describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should display the home page", () => {
    cy.get("h1").should("contain", "Rainfall Tracker");
    cy.findByRole("cell", {
      name: /france/i,
    }).should("exist");
  });

  it("should filter the table by location", () => {
    const select = cy.findByRole("combobox");
    select.select("norway");
    cy.findByRole("cell", {
      name: /norway/i,
    }).should("exist");
    cy.findByRole("cell", {
      name: /france/i,
    }).should("not.exist");
  });

  it("should reset the table when the 'See All' option is selected", () => {
    const select = cy.findByRole("combobox");
    select.select("norway");
    cy.findByRole("cell", {
      name: /norway/i,
    }).should("exist");

    cy.findByRole("cell", {
      name: /france/i,
    }).should("not.exist");

    select.select("See All");

    cy.findByRole("cell", {
      name: /france/i,
    }).should("exist");
  });
});
