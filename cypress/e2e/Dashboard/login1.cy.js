describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://xendit-dashboard-ui-live.us-west-2.stg.tidnex.dev/')

    cy.get("input[name=email]").type('jennie.jornales@xendit.co')
    cy.get("input[type=password]").type('Password1!')
    cy.get("button[type=submit]").click()
    cy.wait(10000)
    cy.get("a[id=lhs-home]").contains('Home').should('be.visible')
  
    
  })
})