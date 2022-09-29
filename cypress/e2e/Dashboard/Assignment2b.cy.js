describe('empty spec', () => {
    it('passes', () => {
      cy.visit('https://xendit-dashboard-ui-live.us-west-2.stg.tidnex.dev/')
  
      cy.get("input[name=email]").type('jennie.jornales+1@xendit.co')
      cy.get("input[type=password]").type('Password1!')
      cy.get("button[type=submit]").click()
      cy.wait(10000)
      cy.get("a[id=lhs-home]").contains('Home').should('be.visible')
    
      cy.get('#lhs-main-menu').each((element) => {
        // Returns the current elements
        expect(Cypress.$('#lhs-main-menu a[id=lhs-balance]')).to.be.visible;
        expect(Cypress.$('#lhs-main-menu a[id=lhs-transactions-new]')).to.be.visible;
        expect(Cypress.$('#lhs-main-menu a[id=lhs-reporting]')).to.be.visible;
        expect(Cypress.$('#lhs-main-menu a[id=lhs-moneyin]')).to.be.visible;
        expect(Cypress.$('#lhs-main-menu a[id=lhs-paymentlinks]')).to.be.visible;
        expect(Cypress.$('#lhs-main-menu a[id=lhs-qr-code]')).to.be.visible;
        expect(Cypress.$('#lhs-main-menu a[id=lhs-moneyout]')).to.be.visible;
        expect(Cypress.$('#lhs-main-menu a[id=lhs-customers]')).to.be.visible;
      })



      
    })
  })