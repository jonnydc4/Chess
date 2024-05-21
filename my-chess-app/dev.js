
function generateChessBoard(){
    let emptyChessBoard = []

    function isDarkSpace(rowLetter, columnNumber){
        if (/[aceg]/.test(rowLetter)) {
            if (columnNumber % 2 === 0) {
                return true
            } else {return false}
        } else {
            if (columnNumber % 2 === 0) {
                return false
            } else {return true}
        }
    }
    function addRowToBoard(rowLetter){
        let newRow = []
        for (let i = 0; i < 8; i++) {
            newRow.push({
                file: rowLetter,
                rank: i+1,
                piece: "empty",
                isDark: isDarkSpace(rowLetter, i)
            })
        }
        emptyChessBoard.push(newRow)
    }

    let rows = "abcdefgh"
    rows.split("").forEach(addRowToBoard)

    console.log(emptyChessBoard)
}

generateChessBoard()