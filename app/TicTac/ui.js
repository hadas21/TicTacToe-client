'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
    $('#welcome-user').text(`Hey, ${response.user.email}. thanks for signing up =)`)
    $('#sign-up-form').hide().trigger('reset')
    $('#center').show()
}

const onSignUpFailure = function() {
    $('#sign-up-form').trigger('reset').hide()
    $('#sign-up-modal').show()

    $('#sign-up-btn').show()
}

const onLogInSuccess = (response) => {
    $('#welcome-user').text(`Hey, ${response.user.email}! good to have you back`)
    $('#center').show()

    store.userToken = response.user.token

    $('#log-in-form').hide().trigger('reset')
    $('#log-in-btn').hide()
    $('#log-out-btn').show()
    $('#new-game-btn').show()
    $('#sign-up-btn').hide()
    $('#sign-up-form').hide()
    $('header').show()
        // $('#message-user').show()
}

const onLogInFailure = function() {
    // alert("Sorry, the input does'nt match with our system")
    console.log('fail')
    $('#log-in-modal').show()
    $('#log-in-form').trigger('reset').hide()
    $('#log-in-btn').show()
}

const onLogOutSuccess = () => {
    $('#log-out-modal').show()
    $('#log-out-btn').hide()
    $('#log-in-btn').show()
    $('#sign-up-btn').show()
    $('#new-game-btn').hide()
    $('#board-game').hide()
    $('#center').show()
    $('#welcome-user').text('thank you for playing')
    $('#message-user').empty()
}

const onNewGameSuccess = (response) => {
    store.isOver = false
    store.gameId = response.game._id
    store.gameCells = response.game.cells

    $('#board-game').show()
    $('.cell').empty().on('click')
    $('#center').hide()
    $('#message-user').empty()

    store.playerMove = 'O'
    console.log(store.playerMove)
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

    $(store.event.target).text(store.playerMove)

    //check for tie
    const isTie = response.game.cells.every(cell => {
            return (cell !== '')
        })
        //check for win
    store.isOver = over(response.game.cells)
    if (store.isOver === true) {
        $('#message-user').text(`${store.playerMove} is the winner!!`)
    } else if (store.isOver === false && isTie) {
        $('#message-user').text("game over, it's a tie")
    }
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
