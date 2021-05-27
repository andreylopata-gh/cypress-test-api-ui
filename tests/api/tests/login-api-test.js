

describe('API Login Tests', () => {
    // beforeEach(() => {
    //     cy.server()
    //     cy.route({
    //         method: 'GET',
    //         url: `/apiv2/`,
    //     }).as('loginPage')
    //
    //     cy.visit(Cypress.config('baseUrl'))
    //         .wait('@loginPage')
    // })

    it('111111', () => {
        cy.request({
            method: 'POST',
            url: 'https://gateway.healthrecoverysolutions.com/v1/tokens',
            body: {
                "data": {
                    "type": "credentials",
                    "username": "invalid_usernam11",
                    "password": "invalid_pswd22",
                    "source": "ClinicianConnect 2"
                }
            }
        }).then(response => {
            let res = response.body;
            console.log(res);
        })


    })

})