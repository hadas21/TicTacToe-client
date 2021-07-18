const store = require('./../store')

const signUp = function(data) {
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
        data
    })
}

const logIn = function(data) {
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
        data
    })
}

const logOut = function() {
    return $.ajax({
        method: 'DELETE',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
        headers: {
            Authorization: 'Bearer ' + store.userToken
        }
    })
}

const newGame = function() {
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
        headers: {
            Authorization: 'Bearer ' + store.userToken
        }
    })
}

module.exports = {
    signUp,
    logIn,
    logOut,
    newGame
}
