const store = require('../store')

// let the computer make the next move
function computerMove () {
  const emptyCells = []

  store.cells.forEach(cell => {
    if (cell.textContent === '') {
      emptyCells.push(cell)
    }
  })

  // computer marks a random EMPTY cell
  const random = Math.ceil(Math.random() * emptyCells.length) - 1
  emptyCells[random].textContent = store.playerMove
}

module.exports = {
  computerMove
}
