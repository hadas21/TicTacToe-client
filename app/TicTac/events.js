const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUpBtn = function() {
    $('#sign-up-form').show()
    $('#sign-up-btn').hide()
}

const onSignUp = function(event) {
    event.preventDefault()

    const form = event.target
    const data = getFormFields(form)

    api.signUp(data)
        .then(ui.onSignUpSuccess)
        .catch(ui.onSignUpFailure)
}

const onLogInBtn = function() {
    $('#log-in-form').show()
    $('#log-in-btn').hide()
}

const onLogIn = function(event) {
    event.preventDefault()

    const form = event.target
    const data = getFormFields(form)
    api.logIn(data)
        .then(ui.onLogInSuccess)
        .catch(ui.onLogInFailure)


}

const onLogOut = function() {
    console.log('out')
        // api.logOut()

}

module.exports = {
    onSignUpBtn,
    onSignUp,
    onLogInBtn,
    onLogIn,
    onLogOut
}