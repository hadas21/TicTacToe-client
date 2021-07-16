'use strict'

const onSignUpSuccess = (response) => {
    console.log(`Hey, ${response.user.email}. welcome!`)
    $('#welcome-user').text(`Hey, ${response.user.email}. welcome!`)
    $('#sign-up-form').trigger('reset')
    $('#sign-up-form').hide()
}

const onSignUpFailure = function() {
    alert('Your user name already exists, try logging in')
    $('#sign-up-form').hide()
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure
}