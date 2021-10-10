const store = require('./../store')
const config = require('./../config')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const logIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const logOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    }
  })
}

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    }
  })
}

const cell = function (cellIndex, cellValue) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.gameId,
    headers: {
      Authorization: 'Bearer ' + store.userToken
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: cellValue
        },
        over: store.isOver
      }
    }
  })
}

module.exports = {
  signUp,
  logIn,
  logOut,
  newGame,
  cell
}
