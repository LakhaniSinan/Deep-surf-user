import { Box, Typography } from '@mui/material'
const TradingCard = ({ title, value, time, titleColor, valueColor, timeColor, padding, titleFontSize, timeFontSize, titleFontWeight, valueFontWeight, valueFontSize, textAlign , mt }) => {
    return (
        <Box bgcolor={"background.almostBlack"} p={padding || 1} textAlign={textAlign || "center"} borderRadius={"5px"} mt={mt || 1.2}>
            <Box>
                <Typography color={titleColor || 'neutral.brightGreen'} fontWeight={titleFontWeight || 700} fontSize={titleFontSize || "16px"}>
                    {title}
                </Typography>
            </Box>
            <Box>
                <Typography color={valueColor || 'text.almostWhite'} fontSize={valueFontSize || "13px"} fontWeight={valueFontWeight || 400}>
                    {value}
                </Typography>
            </Box>
            <Box>
                <Typography color={timeColor || 'text.almostWhite'} fontSize={timeFontSize || "12px"}>
                    {time}
                </Typography>
            </Box>
        </Box>
    )
}

export default TradingCard