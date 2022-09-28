const letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
const geral = []


function chessboard () {
    for (let i = 0; i < letters.length ; i++) { 
    const line = []
        for (let j = 0; j < numbers.length ; j++) {
            line.push(`${letters[i]} - ${numbers[j]}`);
        }
        geral.push(line);
    }
    return geral
}


module.exports = chessboard;