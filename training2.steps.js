Given('Training2 assignment', () => {

    const options = {
        method: 'POST',
        url: 'https://api.xendit.co/customers',
        failOnStatusCode: false,
        auth: {
            user: 'xnd_development_S87MKS1WNnsmNuxKrwMGIXpdQEaO3v9iHerLunZFaqFAQYwcKsSiLvlvYUakwmv',
            pass: '',
        }, 
        body:{

            

                reference_id: 'demo_14758019626092',
                type: 'INDIVIDUAL',
                individual_detail: {
                    given_names: 'JenCustomer',
                    surname: 'JJ',
                    nationality: 'ID',
                    place_of_birth: 'Jakarta',
                    date_of_birth: '1980-01-01',
                    gender: 'FEMALE',
                    employment: {
                        employer_name: 'Xendit',
                        //Nature_of_business: 'Payment Gateway',
                        role_description: 'Test dummy'
                    }
                },
            
                email: 'customer@website.com',
                mobile_number: '+628121234567890',
                phone_number: '+628121234567890',
            
                addresses: [{
                    street_line1: 'Panglima Polim IV',
                    street_line2: 'Ruko Grand Panglima Polim, Blok E',
                    city: 'Jakarta Selatan',
                    province_state: 'DKI Jakarta',
                    postal_code: '993448',
                    country: 'ID',
                    category: 'HOME',
                    is_primary: true
                }],
                identity_accounts: [{
                    type: 'CREDIT_CARD',
                    company: 'OCBC',
                    description: 'My account',
                    country: 'ID',
                    properties:{
                        token_id: '586f0ba2ab70de5d2b409e0d'
                    }
                }],
                kyc_documents: [{
                    type: 'IDENTITY_CARD',
                    sub_type: 'NATIONAL_ID',
                    country: 'ID',
                    document_name: 'KTP',
                    document_number: '12356789012456',
                    expires_at: '2023-03-30',
                    holder_name: 'John Doe',
                    document_images: [
                        'file-ec700c1c-db17-4496-b1fb-04ebe551b412'
                    ]
                }],
                description: 'My first customer',
                metadata: {
                    foo: 'bar'
                
                
                
            }

        }

        //
    };

    cy.wrap(options).as('request')
    cy.request(options).as('response');
    //return cy.request(options);
})

Then('request is equal to response', () => {
    const request = {
        "type": 'INDIVIDUAL',
        "email": 'customer@website.com' 
    }
    
    const response = {
        "type": 'INDIVIDUAL',
        "email": 'customer@website.com' 
    }


    cy.get('@request').then(request => {
        cy.get('@response').then(response=> {
        expect({type: {email: ['x', 'y']}}).to.have.nested.property('type.email[1]');
        })
    })
    



})
