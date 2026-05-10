describe('Pesquisa no Google Acadêmico', () => {

  it('Deve pesquisar um tema e validar resultados', () => {
    cy.visit('/');
    cy.get('input[name="q"]')
      .type(' Inteligência Artificial{enter}'); 
    cy.get('#gs_res_ccl_mid')
      .should('be.visible');
   s
    cy.wait(3000);    
    cy.screenshot('resultado-pesquisa-google-academico');
  });

});