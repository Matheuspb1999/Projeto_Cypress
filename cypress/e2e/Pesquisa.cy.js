describe('Pesquisa no Google Acadêmico', () => {

  it('Deve pesquisar um tema e validar resultados', () => {

    // Acessa o Google Acadêmico
    cy.visit('/');

    // Pesquisa o tema
    cy.get('input[name="q"]')
      .type('Inteligência Artificial{enter}');

    // Valida se os resultados foram exibidos
    cy.get('#gs_res_ccl_mid')
      .should('be.visible');

    // Aguarda carregar resultados
    cy.wait(3000);

    // Tira screenshot com nome personalizado
    cy.screenshot('resultado-pesquisa-google-academico');
  });

});