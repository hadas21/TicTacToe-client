'use strict'

const { x } = require('../store')
const store = require('../store')

const onSignUpSuccess = (response) => {
    alert(`Hey, ${response.user.email}, welcome! please log in`)
    $('#welcome-user').text(`Hey, ${response.user.email}. thanks for signing up =)`)
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
    $('#log-in-form').hide().trigger('reset')
    $('#log-in-btn').hide()
    $('#log-out-btn').show()
    $('#new-game-btn').show()
    $('#sign-up-btn').hide()
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
    $('#new-game-btn').hide()
}

const failure = () => {
    alert('Something went wrong... try again')
}

const onNewGameSuccess = (response) => {
    store.gameId = response.game.id
    store.gameCells = response.game.cells

    $('#board-game').show()
    store.playerStat = x
    console.log(store.playerStat)
}




module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onLogInSuccess,
    onLogInFailure,
    onLogOutSuccess,
    onNewGameSuccess,
    failure

}
