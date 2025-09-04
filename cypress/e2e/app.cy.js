describe('Aplicação React com Cypress', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve carregar a página inicial', () => {
    cy.contains('Projeto React com Cypress')
    cy.contains('Este é um projeto React simples configurado com Cypress para testes E2E.')
  })

  it('deve ter um botão contador funcionando', () => {
    // Verifica se o contador inicia em 0
    cy.contains('Contador: 0')
    
    // Clica no botão
    cy.contains('Contador: 0').click()
    
    // Verifica se o contador incrementou para 1
    cy.contains('Contador: 1')
    
    // Clica novamente
    cy.contains('Contador: 1').click()
    
    // Verifica se o contador incrementou para 2
    cy.contains('Contador: 2')
  })

  it('deve ter o título correto', () => {
    cy.title().should('eq', 'react-cypress-project')
  })
})

