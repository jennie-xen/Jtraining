describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://dashboard-staging.xendit.co/')
    
    cy.get('.mb-16 > .input-text-content > input').type('jennie.jornales+1@xendit.co')

    cy.get(':nth-child(2) > .input-text-content > input').type('Password1!')

    cy.get('.d-flex > .btn').click
   
    //test  
  })
})