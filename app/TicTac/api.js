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

// const logOut = function() {
//     return $.ajax({
//         method: 'DELETE',
//         url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
//         data
//     })
// }

module.exports = {
    signUp,
    logIn
}