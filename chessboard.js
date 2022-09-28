let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
let bigArr = [];

function chessboard() {
	let newArr = [];
	alphabet.map((letter) => {
		for (let i = 1; i < 9; i++) {
			newArr.push(`${letter} - ${i}`);
		}
        bigArr.push(newArr);
		newArr = [];
	});
// console.log(bigArr);
return bigArr;

}

chessboard();

module.exports = chessboard;
