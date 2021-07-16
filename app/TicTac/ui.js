'use strict'

const onSignUpSuccess = (response) => {
    console.log(response)
    $('#sign-up-form').trigger('reset')
}

const failure = function() {
    console.log('=(')
}

module.exports = {
    onSignUpSuccess,
    failure
}