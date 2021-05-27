describe('API Login Tests', () => {

    it('Verify invalid username and password', () => {
        cy.request({
            method: 'POST',
            url: 'https://gateway.healthrecoverysolutions.com/v1/tokens',
            failOnStatusCode: false,
            body: {
                "data": {
                    "type": "credentials",
                    "username": "invalid_usernam11",
                    "password": "invalid_pswd22",
                    "source": "ClinicianConnect 2"
                }
            }
        }).then(response => {
            expect(response.status).to.eq(422);
            expect(response.body.message).to.eq("Invalid Credentials");
        })

    })

    it('Verify option method without body', () => {
        cy.request({
            method: 'OPTIONS',
            url: 'https://gateway.healthrecoverysolutions.com/v1/tokens',
        }).then(response => {
            expect(response.status).to.eq(200);
        })
    })

    it('Verify password reset with empty username', () => {
        cy.request({
            method: 'POST',
            url: 'https://gateway.healthrecoverysolutions.com/v1/password-reset-tokens',
            failOnStatusCode: false,
            body: {
                "data": {
                    "username": "",
                    "landing_url": "https://cc.healthrecoverysolutions.com/recovery"
                }
            }
        }).then(response => {
            expect(response.status).to.eq(422);
            expect(response.body.message).to.eq("The given data was invalid.");
        })

    })

    it('Verify password reset with valid username', () => {
        cy.request({
            method: 'POST',
            url: 'https://gateway.healthrecoverysolutions.com/v1/password-reset-tokens',
            failOnStatusCode: false,
            body: {
                "data": {
                    "username": "test",
                    "landing_url": "https://cc.healthrecoverysolutions.com/recovery"
                }
            }
        }).then(response => {
            expect(response.status).to.eq(204);
        })

    })

})