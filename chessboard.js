function chessboard() {
    //Primeiro: criar uma array geral vazia, que vai receber 8 arrays (linhas(de letra)) - O Tabuleiro
     let chessboard = []  // ----- Chessboard: Array Geral, vazia, vai receber os outros arrays(linhas)
     //Segundo: Cada um desses 8 arrays(linhas) vai receber 8 pares (letra e numero)
     //Oitavo: Repetir os (terceiro ao setimo) passos, 8 vezes
     for (let i = 1; i < 9; i++){        // -- Volta Maior: Gerar as linhas com respectivas letras (a, b, c, d,...)
        let linha = []
        //Sexto: Repetir o quinto passo 8 vezes - porque são oito pares por linha
        for (let j = 1; j < 9; j++){   // ----- Voltas internas, 8 voltas em cada volta de i(letra)
            let letra = i + 96;
            //Terceiro: Converter numeros para letras (a = 1, b = 2, ... , h = 8)
            //Quarto: Juntar a letra convertida com o respectivo numero (index-interno) numa string
            //Quinto: Colocar o par na array-linha
            linha.push(String.fromCharCode(letra)+` - ${j}`)
        }
        //Setimo: Colocar cada linha na array geral - Tabuleiro
        chessboard.push(linha)
    }
    return chessboard
}

module.exports = chessboard;
