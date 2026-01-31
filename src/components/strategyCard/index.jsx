import { Box, Typography } from '@mui/material'
import React from 'react'

const StrategyCard = ({ title, percentage, description, btnText, bodrerColor, bgcolor, titleColor, percentageColor, descriptionColor, btnBackgroudnColor, btnBorderColor, btnTextColor }) => {
    return (
        <Box border={bodrerColor || "1px solid rgba(16, 185, 129, 1)"} bgcolor={bgcolor || "background.deepGreen"} p={1.8} height={"150px"} borderRadius={"15px"} mt={2}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Typography color={titleColor || 'neutral.Snowwhite'} fontSize={"18px"} fontWeight={400}>
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <Typography color={percentageColor || 'neutral.lightGreen'}>
                        {percentage}
                    </Typography>
                </Box>
            </Box>
            <Box mt={"5px"}>
                <Typography fontWeight={400} fontSize={"15px"} color={descriptionColor || 'neutral.Snowwhite'}>
                    {description}
                </Typography>
            </Box>
            {btnText
                &&
                <Box bgcolor={btnBackgroudnColor || "neutral.lightGreen"} border={btnBorderColor || "1px solid rgba(30, 179, 99, 1)"} p={1} width={"100px"} borderRadius={"20px"} textAlign={"center"} mt={2}>
                    <Typography color={btnTextColor || 'neutral.Snowwhite'} fontWeight={400}>
                        {btnText}
                    </Typography>
                </Box>}


        </Box>
    )
}

export default StrategyCard