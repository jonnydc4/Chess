import BoardSquare from "./BoardSquare";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

function ChessBoard() {

    const [chessBoard, setChessBoard] = useState([])

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

        setChessBoard(emptyChessBoard)
    }

    useEffect(() => {
        generateChessBoard()
    })

    return (
        <Box>
            {chessBoard.map((row) => (
                <Box sx={{ display: 'flex' }}>
                    {row.map((cell) => (
                        <BoardSquare isDark={cell.isDark} />
                    ))}
                </Box>
            ))}
        </Box>
    );
}

export default ChessBoard;