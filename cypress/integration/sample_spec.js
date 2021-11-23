describe('Pokemons app visit test', () => {
  it('Successfully visit', () => {
    cy.visit("/")
    cy.wait(10000)
  });
});

describe('Pokemons app e2e tests', () => {
  it('Should be have inputs', () => {
    cy.get("input").should("have.value", "")
  });

  it('Should open pokemon modal', () => {
    cy.get("div")
      .contains(/Caterpie/i)
      .click()

    cy.get("button")
      .contains(/cancel/i)
      .click()
  });

  it('Should be searching pokemon by name', () => {
    cy.get("input[placeholder='Enter Pokemon name...']")
      .type("pikachu")
      .should("have.value", "pikachu")

    cy.get("div").contains(/pikachu/i)

    cy.get("input[placeholder='Enter Pokemon name...']")
      .clear()
  });

  it('Should be searching pokemon by type', () => {
    cy.get("input[placeholder='Enter Pokemon type...']")
      .type("ice")
      .should("have.value", "ice")

    cy.get("div").contains(/bergmite/i)

    cy.get("input[placeholder='Enter Pokemon type...']")
      .clear()
  });

  it('Should be working pagination', () => {
    cy.get("li")
      .contains("2")
      .click()

    cy.get("li")
      .contains("1")
      .click()

    cy.get("div")
      .contains(/40/)
      .click()

    cy.contains("20 / page").click()
    cy.contains("20 / page").click()
    cy.contains("40 / page").click()

    cy.get("div[class='ant-pagination-options-quick-jumper']")
      .find("input")
      .type("4")
      .type("{enter}")
      .blur()
  });

  it('Reload app test', () => {
    cy.reload()
    cy.contains(/please wait/i)
  });
})
