Given('Training2 assignment', () => {

    const options = {
        method: 'POST',
        url: 'https://api.xendit.co/customers',
        failOnStatusCode: false,
        auth: {
            user: 'xnd_development_S87MKS1WNnsmNuxKrwMGIXpdQEaO3v9iHerLunZFaqFAQYwcKsSiLvlvYUakwmv',
            pass: '',
        }, 

    };
    return cy.request(options);
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
    expect(request).to.deep.equal(response);
})

