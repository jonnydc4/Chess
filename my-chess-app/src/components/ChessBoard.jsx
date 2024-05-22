import BoardSquare from "./BoardSquare";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";

function ChessBoard() {

    const [chessBoard, setChessBoard] = useState([])

    const pieces = {
        empty: "empty",
        white: {
            pawn: "P",
            rook: "R",
            knight: "N",
            bishop: "B",
            queen: "Q",
            king: "K"
        },
        black: {
            pawn: "p",
            rook: "r",
            knight: "n",
            bishop: "b",
            queen: "q",
            king: "k"
        }
    }

    function generateEmptyChessBoard() {
        let emptyChessBoard = []

        // isDarkSpace checks the row and columnNumber of a cell and returns true or false to indicate if a cell should be dark.
        function isDarkSpace(rowLetter, columnNumber) {
            if (/[aceg]/.test(rowLetter)) {
                if (columnNumber % 2 === 0) {
                    return true
                } else {
                    return false
                }
            } else {
                if (columnNumber % 2 === 0) {
                    return false
                } else {
                    return true
                }
            }
        }

        // addRowToBoard adds a row of 8 cell objects to the emptyChessBoard each time it is called.
        function addRowToBoard(rowLetter) {
            let newRow = []
            for (let i = 0; i < 8; i++) {
                // Adds cell object to the new row
                newRow.push({
                    file: rowLetter,
                    rank: i + 1,
                    piece: " ",
                    isDark: isDarkSpace(rowLetter, i)
                })
            }
            emptyChessBoard.push(newRow)
        }

        let rows = "abcdefgh"
        rows.split("").forEach(addRowToBoard)

        setChessBoard(emptyChessBoard)
    }

    function generatePieces() {
        console.log(chessBoard)
        // copy chess board
        let newBoard = [...chessBoard]
        console.log(newBoard)

        // generate the front rows (pawns)
        let frontRowBlack = newBoard[6]
        let frontRowWhite = newBoard[1]
        frontRowBlack.forEach((cell) => {
            cell.piece = pieces.black.pawn
        })
        frontRowWhite.forEach((cell) => {
            cell.piece = pieces.white.pawn
        })

        // generate back row (king, queen, bishop, knight, rook)
        let backRowBlack = newBoard[7]
        let backRowWhite = newBoard[0]
        const orderOfPiecesOnRow = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]

        for (let i = 0; i < 8; i++) {
            backRowBlack[i].piece = pieces.black[orderOfPiecesOnRow[i]]
            backRowWhite[i].piece = pieces.white[orderOfPiecesOnRow[i]]
        }

        newBoard[6] = frontRowBlack
        newBoard[1] = frontRowWhite
        newBoard[7] = backRowBlack
        newBoard[0] = backRowWhite

        setChessBoard(newBoard)
    }

    // This hook runs only once
    useEffect(() => {
        generateEmptyChessBoard()
    }, [])

    // This hook runs after the chessboard is changed
    useEffect(() => {
        if (chessBoard.length > 0) {
            generatePieces()
        }
    }, [chessBoard])

    return (
        <Box>
            {chessBoard.map((row) => (
                <Box sx={{display: "flex"}}>
                    {row.map((cell) => (
                        <BoardSquare piece={cell.piece} isDark={cell.isDark}/>
                    ))}
                </Box>
            ))}
        </Box>
    );
}

export default ChessBoard;