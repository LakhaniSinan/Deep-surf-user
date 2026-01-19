import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Community = () => {
    const levels = [
        {
            label: "Support",
            value: "3829,17",
            color: "#3EDD87",
        },
        {
            label: "Resistance",
            value: "4349,70",
            color: "#FF6C82",
        },
    ];
    return (
        <Box mt={3} >
            <Box>
                <Typography color={"white"} mt={3} fontSize={"22px"} fontWeight={400}>
                    Community sentiment
                </Typography>
            </Box>
            <Box
                position="relative"
                width="100%"
                height="50px"
                borderRadius="30px"
                display="flex"
                overflow="hidden"
                mt={2}
            >
                {/* First box: longdataValue */}
                <Box
                    width={`56%`} // static value
                    height="100%"
                    bgcolor="#0B2015"
                    borderRadius="30px 0px 0px 30px"
                    transition="width 0.3s ease"
                />

                {/* Second box: strDataValue */}
                <Box
                    width={`80%`} // static value
                    height="100%"
                    bgcolor="#8B0000"
                    borderRadius="0px 30px 30px 0px"
                    transition="width 0.3s ease"
                />

                {/* First progress text */}
                <Typography
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: `15%`, // 56 / 2
                        transform: "translate(-50%, -50%)",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "green",
                    }}
                >
                    56%
                </Typography>

                {/* Second progress text */}
                <Typography
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: `70%`, // 56 + 80/2 = 56 + 40 = 96
                        transform: "translate(-50%, -50%)",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#FF6666",
                    }}
                >
                    80%
                </Typography>
            </Box>
            <Box sx={{ p: { xs: 0, md: 2 }, borderRadius: 2, marginTop: 2, }}>
                <Grid container spacing={2}>
                    {levels.map((item, index) => (
                        <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                            <Box
                                backgroundColor="rgba(28, 28, 28, 1)"
                                borderRadius="10px"
                                p={2}
                            >
                                <Typography variant="h6" fontSize={"15px"}>
                                    {item.label}
                                </Typography>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: item.color,
                                        fontSize: "15px",
                                    }}
                                >
                                    {item.value}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>


        </Box >
    )
}
export default Community
