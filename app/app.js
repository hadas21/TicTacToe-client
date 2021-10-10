// use require with a reference to bundle the file and use it in this file
const eventsTic = require('./../app/TicTac/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').hide()
  $('#sign-up-form').on('submit', eventsTic.onSignUp, eventsTic.onLogIn)
  $('#sign-up-btn').on('click', eventsTic.onSignUpBtn)

  $('#log-in-form').hide()
  $('#log-in-form').on('submit', eventsTic.onLogIn)
  $('#log-in-btn').on('click', eventsTic.onLogInBtn)

  $('#board-game').hide()
  $('#log-out-btn').hide().on('click', eventsTic.onLogOut)
  $('#new-game-btn').hide().on('click', eventsTic.onNewGame)

  $('.cell').on('click', eventsTic.onCell)

  $('#sign-up-modal-btn').on('click', eventsTic.onSignUpModalBtn)
  $('#log-in-modal-btn').on('click', eventsTic.onLogInModalBtn)
  $('#log-out-modal-btn').on('click', eventsTic.onLogOutModalBtn)
  $('#failure-modal-btn').on('click', eventsTic.onFailureModalBtn)
})
