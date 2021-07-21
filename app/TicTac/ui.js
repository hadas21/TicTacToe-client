'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
    $('#welcome-user').text(`Hey, ${response.user.email}. thanks for signing up =)`)
    $('#sign-up-form').hide().trigger('reset')
}

const onSignUpFailure = function() {
    $('#sign-up-form').trigger('reset')
    alert('something went wrong =( try again')
    $('#sign-up-btn').show()
}

const onLogInSuccess = (response) => {
    $('#welcome-user').text(`Hey, ${response.user.email}! good to have you back`)

    store.userToken = response.user.token

    $('#log-in-form').hide().trigger('reset')
    $('#log-in-btn').hide()
    $('#log-out-btn').show()
    $('#new-game-btn').show()
    $('#sign-up-btn').hide()
    $('#sign-up-form').hide()
    $('header').show()
}

const onLogInFailure = function() {
    alert("Sorry, the input does'nt match with our system")
    $('#log-in-form').trigger('reset')
    $('#log-in-btn').show()
}

const onLogOutSuccess = () => {
    alert('Are you sure you want to leave?')
    $('#log-out-btn').hide()
    $('#log-in-btn').show()
    $('#sign-up-btn').show()
    $('#new-game-btn').hide()
    $('#board-game').hide()
    $('#center').show()
}

const onNewGameSuccess = (response) => {

    console.log('new game response: ', response)
    store.isOver = false
    store.gameId = response.game._id
    store.gameCells = response.game.cells
    console.log('id', store.gameId)
    $('#board-game').show()
    $('.cell').empty().on('click')
    $('#center').hide()
    store.playerStat = 'O'
    console.log(store.playerStat)
}
const over = function(gameCells) {
    if (gameCells[0] === gameCells[1] && gameCells[0] === gameCells[2] && !(gameCells[0] === '')) {
        return true
    } else if (gameCells[3] === gameCells[4] && gameCells[3] === gameCells[5] && !(gameCells[3] === '')) {
        return true
    } else if (gameCells[6] === gameCells[7] && gameCells[6] === gameCells[8] && !(gameCells[6] === '')) {
        return true
    } else if (gameCells[0] === gameCells[3] && gameCells[0] === gameCells[6] && !(gameCells[0] === '')) {
        return true
    } else if (gameCells[1] === gameCells[4] && gameCells[1] === gameCells[7] && !(gameCells[1] === '')) {
        return true
    } else if (gameCells[2] === gameCells[5] && gameCells[2] === gameCells[8] && !(gameCells[2] === '')) {
        return true
    } else if (gameCells[0] === gameCells[4] && gameCells[0] === gameCells[8] && !(gameCells[0] === '')) {
        return true
    } else if (gameCells[2] === gameCells[4] && gameCells[2] === gameCells[6] && !(gameCells[2] === '')) {
        return true
    } else {
        return false
    }
}
const onCellSuccess = (response) => {

    //display x/o on board
    store.event.currentTarget.innerText = store.playerStat
        //check for tie
    const isTie = response.game.cells.every(cell => {
            return !(cell === '')
        })
        //check for win
    store.isOver = over(response.game.cells)
    if (store.isOver === true) {
        $('#message-user').text(`${store.playerStat} is the winner!!`)
    } else if (store.isOver === false && isTie) {
        $('#message-user').text("game over, it's a tie")
    }

    console.log(response)
}

const failure = () => {
    alert('Something went wrong... try again')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onLogInSuccess,
    onLogInFailure,
    onLogOutSuccess,
    onNewGameSuccess,
    onCellSuccess,
    failure

}
