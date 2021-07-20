'use strict'

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

const onNewGameSuccess = (response) => {
    console.log('new game response: ', response)
    store.gameId = response.game._id
    store.gameCells = response.game.cells
    console.log('id', store.gameId)
    $('#board-game').show()
    store.playerStat = store.o
    console.log(store.playerStat)
}

const onCellSuccess = (response) => {
    //display x/o on board
    store.event.currentTarget.innerText = store.playerStat
        //check for tie
    const isTie = response.game.cells.every(cell => {
            return !(cell === '')
        })
        //check for win
    store.isOver = store.over(response.game.cells)
    if (store.isOver === true) {
        $('.cell').off('click')
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
