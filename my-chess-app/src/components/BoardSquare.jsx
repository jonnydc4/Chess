import Box from '@mui/material/Box';


function BoardSquare({isDark}) {
    return (
        <Box component="section"
             height={50}
             width={50}
             sx={{
                 border: "1px solid grey",
                 bgcolor: isDark ? "grey" : "white"
        }}
        >
        </Box>
    );
}

export default BoardSquare;