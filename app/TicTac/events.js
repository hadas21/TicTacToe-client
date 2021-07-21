const store = require('../store')
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
    // store.formIsOpen = false
const onSignUpBtn = function() {
    $('#sign-up-form').show()
    $('#sign-up-btn').hide()
    $('.center').css({ position: 'fixed', top: '30%', border: 'none' })
        // store.formIsOpen = true
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
        // store.formIsOpen = true
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
        //attach index to each div
    store.cellIndex = event.currentTarget.dataset.index
        //toggle x/o
    const toggle = function(value) {
        return { X: 'O', O: 'X' }[value]
    }
    store.playerStat = toggle(store.playerStat)
        //check if div is empty and then enable it
    const innerText = event.currentTarget.innerText
    if (!innerText && store.isOver === false) {
        store.event = event
        api.cell(store.cellIndex, store.playerStat)

        .then(ui.onCellSuccess)
            .catch(ui.failure)

    } else {
        console.log('this space is taken')
    }
}

// const onBody = function() {
//     if (store.formIsOpen === true) {
//         $('#sign-up-form').hide()
//         $('#log-in-form').hide()
//     }
// }

module.exports = {
    onSignUpBtn,
    onSignUp,
    onLogInBtn,
    onLogIn,
    onLogOut,
    onNewGame,
    onCell //,
    // onBody
}
