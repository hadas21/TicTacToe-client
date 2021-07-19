const store = require('../store')
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
    console.log('event is : ', event)

    store.cellIndex = event.currentTarget.dataset.index

    const toggle = function(value) {
        return { x: 'o', o: 'x' }[value]
    }
    store.playerStat = toggle(store.playerStat)

    const innerText = event.currentTarget.innerText
    if (!innerText) {
        store.event = event
        api.cell(store.cellIndex, store.playerStat)

        .then(ui.onCellSuccess)
            .catch(ui.failure)

    } else {
        console.log('this space is taken')
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
