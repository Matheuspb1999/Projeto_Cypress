describe('Pesquisa no Google Acadêmico', () => {

  it('Deve pesquisar um tema e validar resultados', () => {
    cy.visit('https://scholar.google.com.br', {
  failOnStatusCode: false
})
    cy.get('input[name="q"]')
      .type(' Inteligência Artificial{enter}');
    cy.get('#gs_res_ccl_mid')
      .should('be.visible');
    cy.wait(3000);
    cy.screenshot('resultado-pesquisa-google-academico');
  });

});
