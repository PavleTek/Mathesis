describe('Large CSS - Measure Page Load Time', () => {
  it('Measure total page load time', () => {
    cy.intercept('GET', '**').as('pageLoad'); // Intercept all GET requests

    const startTime = performance.now();

    cy.visitAsHtml('http://localhost:4000/mathJaxCss/large');

    cy.wait('@pageLoad'); // Wait for all intercepted requests to complete

    cy.window().then((win) => {
      const loadTime = performance.now() - startTime;
      const text = `Total page load time: ${loadTime.toFixed(2)} ms`;
      console.log(text);
      cy.log(text);
    });
  });
});
