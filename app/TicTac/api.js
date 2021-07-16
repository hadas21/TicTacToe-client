const signUp = function(data) {
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
        data
    })
}

module.exports = {
    signUp
}