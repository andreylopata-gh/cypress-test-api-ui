// It possible to extend from base Object if it has many different pages.
// But in our case it is enough.
class LoginPage {
    constructor() {}

    loginForm = '#loginPage form';
    forgotPasswordForm = '#loginPage form';
    footer = '#loginPage .text-center.copyright';
    error_notification = '.cg-notify-message-template span';
    signIn_btn = '#loginSubmitButton';
    userName_input = '#loginEmail';
    password_input = '#password';

    forgotPassword_link = '#loginPage form a';
    resetPasswordUsername_input = '#resetPassword_username';
    back_btn = '#resetPasswordBackButton';
    resetPasswordSave_button = '#resetPasswordSaveButton';
    errorResetPassword_notification = '.danger-alert';
    restPasswordSuccess_notification = '.success-alert';
}

module.exports = new LoginPage()