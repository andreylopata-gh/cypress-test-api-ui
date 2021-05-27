const loginPage = require('../pages/LoginPage')

describe('Login Tests', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: `/apiv2/`,
    }).as('loginPage')

    cy.visit(Cypress.config('baseUrl'))
        .wait('@loginPage')
  })

  it('Verify login page content', () => {
    cy.get(loginPage.userName_input)
        .get(loginPage.password_input)
        .get(loginPage.signIn_btn)
        .get(loginPage.loginForm)
        .should('contain', 'Forgot Password?')
        .get(loginPage.footer)
        .should('contain', '2021 © Health Recovery Solutions')
        .should('contain', 'ClinicianConnect™ is for investigational use only.')
        .should('contain', 'Not intended to diagnose, treat, or prevent diseases.')
        .should('contain', 'By logging in, you agree to Health Recovery Solutions')
        .should('contain', 'Terms of Service and Privacy Policy.')
  })

  it('Verify forgot password page content', () => {
    cy.get(loginPage.forgotPassword_link).click()
        .get(loginPage.back_btn)
        .get(loginPage.resetPasswordUsername_input)
        .get(loginPage.resetPasswordSave_button)
        .get(loginPage.forgotPasswordForm)
        .should('contain', 'Enter your username below to reset your password.')
  })

  it('Verify empty login and password fields', () => {
    cy.get(loginPage.signIn_btn).should('be.disabled')
  })

  it('Verify empty login field', () => {
    cy.get(loginPage.userName_input)
        .type('username_txt')
        .get(loginPage.signIn_btn).click()
        .get(loginPage.signIn_btn).should('be.enabled')
  })

  it('Verify empty password field ', () => {
    cy.get(loginPage.password_input)
        .type('password_txt')
        .get(loginPage.signIn_btn).click()
        .get(loginPage.signIn_btn).should('be.enabled')
  })

  it('Invalid username and password fields', () => {
    cy.get(loginPage.userName_input).type('username_txt')
        .get(loginPage.password_input).type('password_txt')
        .get(loginPage.signIn_btn).click()
        .get(loginPage.error_notification)
        .should('contain', 'Username and/or password invalid')
  })

  it('Verify empty username in forgot password', () => {
    cy.get(loginPage.forgotPassword_link).click()
        .get(loginPage.resetPasswordSave_button).click()
        .get(loginPage.errorResetPassword_notification)
        .should('contain', 'Failed to submit reset password request.')
  })

  it('Verify valid username in forgot password', () => {
    cy.get(loginPage.forgotPassword_link).click()
        .get(loginPage.resetPasswordUsername_input)
        .type('any_username')
        .get(loginPage.resetPasswordSave_button).click()
        .get(loginPage.restPasswordSuccess_notification)
        .should('contain', 'Reset password request successfully submitted.')
  })

})
