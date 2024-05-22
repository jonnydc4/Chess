import Box from "@mui/material/Box";
import {useState} from "react";

function Pawn({color}) {
    const [currentLocation, setCurrentLocation] = useState()
    function move(){
        // todo: use location to check available moves.
        // Moves would be forward one or diagnol to take a piece.
        // Forward twice if it is the first time moved.
    }

    return (
        // todo: make it a image of a pawn and use color param to determine the .img
        <Box>Pawn</Box>
    );
}

export default Pawn;