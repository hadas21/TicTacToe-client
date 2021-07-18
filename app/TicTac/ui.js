'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
    console.log(`Hey, ${response.user.email}, welcome!`)
    $('#welcome-user').text(`Hey, ${response.user.email}. welcome!`)
    $('#sign-up-form').hide()
}

const onSignUpFailure = function() {

    $('#sign-up-form').trigger('reset')
    alert('something went wrong =( try again')
    $('#sign-up-btn').show()
}

const onLogInSuccess = (response) => {
    $('#welcome-user').text(`Hey, ${response.user.email}! good to have you back`)
    console.log(response)
    store.userToken = response.user.token
    $('#log-in-form').hide()
    $('#log-in-btn').hide()
    $('#log-out-btn').show()
}

const onLogInFailure = function() {
    alert("Sorry, the input does'nt match with our system")
    $('#log-in-form').trigger('reset')
    $('#log-in-btn').show()
}

const onLogOutSuccess = () => {
    $('#welcome-user').text(`Bye now`)
    $('#log-out-btn').hide()
    $('#log-in-btn').show()
}

const onLogOutFailure = () => {
    alert('Something went wrong... try again')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onLogInSuccess,
    onLogInFailure,
    onLogOutSuccess,
    onLogOutFailure
}
