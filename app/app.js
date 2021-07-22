// use require with a reference to bundle the file and use it in this file
const eventsTic = require('./../app/TicTac/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

    $('header').hide()
    $('#sign-up-form').hide()
    $('#sign-up-form').on('submit', eventsTic.onSignUp)
    $('#sign-up-btn').on('click', eventsTic.onSignUpBtn)

    $('#log-in-form').hide()
    $('#log-in-form').on('submit', eventsTic.onLogIn)
    $('#log-in-btn').on('click', eventsTic.onLogInBtn)

    $('#board-game').hide()
    $('#log-out-btn').hide().on('click', eventsTic.onLogOut)
    $('#new-game-btn').hide().on('click', eventsTic.onNewGame)

    $('.cell').on('click', eventsTic.onCell)
})
