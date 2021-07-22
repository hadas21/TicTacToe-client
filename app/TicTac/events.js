const store = require('../store')
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const onSignUpBtn = function() {
    $('#sign-up-form').show()
    $('#sign-up-btn').hide()
    $('.center').css({ position: 'fixed', top: '30%', border: 'none' })
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
    api.logOut()
        .then(ui.onLogOutSuccess)
        .catch(ui.failure)

}

const onNewGame = function() {

    api.newGame()
        .then(ui.onNewGameSuccess)
        .catch(ui.failure)
}

const onCell = function(event) {
    //attach index to each div
    store.cellIndex = event.currentTarget.dataset.index
        //toggle x/o
    const toggle = function(value) {
        return { X: 'O', O: 'X' }[value]
    }
    store.playerMove = toggle(store.playerMove)
        //check if div is empty and then enable it
    const innerText = event.currentTarget.innerText
    if (!innerText && store.isOver === false) {
        store.event = event
        api.cell(store.cellIndex, store.playerMove)
            .then(ui.onCellSuccess)
            .catch(ui.failure)
    }
}

module.exports = {
    onSignUpBtn,
    onSignUp,
    onLogInBtn,
    onLogIn,
    onLogOut,
    onNewGame,
    onCell
}
