import { Box, Typography } from '@mui/material'

const ShortLongCard = ({ progressBar, color, perColor, positionTittle, percen, border, bgcolor }) => {
    return (
        <Box mt={1} bgcolor={bgcolor || "background.mintGreen"} p={2} border={border || "1px solid rgba(62, 221, 135, 1)"} borderRadius={"30px"}>
            <Box>
                <Typography color={color || "neutral.brightGreen"} fontSize={"14px"}>
                    {positionTittle}
                </Typography>
            </Box>
            <Box>
                <Typography color={perColor || "neutral.Snowwhite"} fontSize={"30px"}>
                    {percen}
                </Typography>
            </Box>
            {progressBar && <Box mt={1}>
                {progressBar}
            </Box>}

        </Box>
    )
}

export default ShortLongCard