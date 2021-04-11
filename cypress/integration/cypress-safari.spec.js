/*
 *   Copyright (c) 2021.
 *   All rights reserved.
 */

it('Playwright at work', () => {
    
    cy.log('Attempt to integrate with safari');
    cy.task('openSafari');
    cy.log('Integrated with safari');
})

/**
 * returning false here prevents Cypress from failing the test
 * expect(err.message).to.include('Ignoring error for now');
 */
Cypress.on("uncaught:exception", (err, runnable) => {

    console.log("Cypress detected uncaught exception", err);
    return false;
});