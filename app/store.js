const store = {
    x: 'x',
    o: 'o',
    playerStat: this.playerStat,
    over: function(gameCells) {
        if (gameCells[0] === gameCells[1] && gameCells[0] === gameCells[2] && !(gameCells[0] === '')) {
            return true
        } else if (gameCells[3] === gameCells[4] && gameCells[3] === gameCells[5] && !(gameCells[3] === '')) {
            return true
        } else if (gameCells[6] === gameCells[7] && gameCells[6] === gameCells[8] && !(gameCells[6] === '')) {
            return true
        } else if (gameCells[0] === gameCells[3] && gameCells[0] === gameCells[6] && !(gameCells[0] === '')) {
            return true
        } else if (gameCells[1] === gameCells[4] && gameCells[1] === gameCells[7] && !(gameCells[1] === '')) {
            return true
        } else if (gameCells[2] === gameCells[5] && gameCells[2] === gameCells[8] && !(gameCells[2] === '')) {
            return true
        } else if (gameCells[0] === gameCells[4] && gameCells[0] === gameCells[8] && !(gameCells[0] === '')) {
            return true
        } else if (gameCells[2] === gameCells[4] && gameCells[2] === gameCells[6] && !(gameCells[2] === '')) {
            return true
        } else {
            return false
        }
    }
}
module.exports = store
