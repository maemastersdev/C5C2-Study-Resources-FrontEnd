/// <reference types="cypress" /> 

describe('URL Test', () => {
  it('Visits Resource Site', () => {
    cy.visit('https://c5c2-study-resources.netlify.app/')
  })
})
//test fails; it cannot get facvourites with "//"

describe('Select User Test', () => {
  it('finds the content "Select User"', () => {
    cy.visit('https://c5c2-study-resources.netlify.app/')

    cy.contains('Select User').click()
  })
})


describe('TypeScript Tag Test', () => {
  it('finds the content "TypeScript Tag"', () => {
    cy.visit('https://c5c2-study-resources.netlify.app/')
    cy.contains('TypeScript').click()
  })
})

describe('Creative Test', () => {
  it('finds the content "Creative Tag"', () => {
    cy.visit('https://c5c2-study-resources.netlify.app/')
    cy.contains('Creative').click() //.click means that the element is clickable
  })
})

describe('Search bar Test', () => {
  it('finds the content "Search Bar"', () => {
    cy.visit('https://c5c2-study-resources.netlify.app/')
    cy.contains('search').click()
    cy.get(".search-bar")
      .type('react')
      .should('have.value', 'test')
    //sometimes they all pass
    //types into the search bar 'value' and checks whether it's typed
  })
})