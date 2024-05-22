import Box from "@mui/material/Box";

function BoardSquare({piece, isDark}) {
    return (
        <Box component="section"
             height={50}
             width={50}
             sx={{
                 border: "1px solid grey",
                 bgcolor: isDark ? "lightgrey" : "white",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 fontWeight: "bold"
             }}
        >
            {piece}
        </Box>
    );
}

export default BoardSquare;