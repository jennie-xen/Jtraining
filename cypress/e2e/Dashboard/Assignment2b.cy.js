 describe('empty spec', () => {
    it('passes', () => {
      cy.visit('https://xendit-dashboard-ui-live.us-west-2.stg.tidnex.dev/')
  
      cy.get("input[name=email]").type('jennie.jornales+1@xendit.co')
      cy.get("input[type=password]").type('Password1!')
      cy.get("button[type=submit]").click()
      cy.wait(10000)
      //cy.get("a[id=lhs-home]").contains('Home').should('be.visible')

    const mainMenuItems = [
    'Home',
    'Balance',
    'Transactions',
    'Reporting',
    'Accept Payments',
    'Payment Links',
    'QR Codes',
    'Send Payments',
    'Customers'
    ]

       mainMenuItems.forEach(function(validateMenuItems){
           switch(validateMenuItems){
               case 'Home':
                   cy.get('#lhs-main-menu a[id=lhs-home]',{ timeout:10000 }).should('be.visible')
               break;

                case 'Balance':
                    cy.get('#lhs-main-menu a[id=lhs-balance]',{ timeout:10000 }).should('be.visible')
                break;

                case 'Transactions':
                    cy.get('#lhs-main-menu a[id=lhs-transactions-new]',{ timeout:10000 }).should('be.visible')
                break;

                case 'Reporting':
                   cy.get('#lhs-main-menu a[id=lhs-reporting]',{ timeout:10000 }).should('be.visible')
               break;

                case 'Accept Payments':
                    cy.get('#lhs-main-menu a[id=lhs-moneyin]',{ timeout:10000 }).should('be.visible')
                break;

                case 'Payment Links':
                    cy.get('#lhs-main-menu a[id=lhs-paymentlinks]',{ timeout:10000 }).should('be.visible')
                break;

                case 'QR Codes':
                   cy.get('#lhs-main-menu a[id=lhs-qr-code]',{ timeout:10000 }).should('be.visible')
               break;

                case 'Send Payments':
                    cy.get('#lhs-main-menu a[id=lhs-moneyout]',{ timeout:10000 }).should('be.visible')
                break;

                case 'Customers':
                    cy.get('#lhs-main-menu a[id=lhs-customers]',{ timeout:10000 }).should('be.visible')
                break;

            
           }

        })

    })
  })