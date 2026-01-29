import { Box, Grid, Typography } from '@mui/material'
import RelaodIcon from "../../assets/icons/relaod-Icon.svg"
import CustomButton from '../../components/customButton'
const SelectorRotation = () => {
    const selectorData = [
        {
            title: "Gaming & NFT",
            value: "+11.69%",
            percen: "AXS +33.8%",
            chnage: "MANA 5.3%"
        },
        {
            title: "MANA 5.3%",
            value: "+10.19%",
            percen: "OCEAN +18.9%",
            chnage: "FET 2.4%"
        },
        {
            title: "Layer 2",
            value: "+10.11%",
            percen: "OP +12.0%",
            chnage: "MANA 5.3%"
        },
        {
            title: "Meme",
            value: "+11.69%",
            percen: "AXS +33.8%",
            chnage: "MANA 5.3%"
        },
        {
            title: "Meme",
            value: "+11.69%",
            percen: "AXS +33.8%",
            chnage: "MANA 5.3%"
        },
        {
            title: "DeFi",
            value: "+11.69%",
            percen: "AXS +33.8%",
            chnage: "MANA 5.3%"
        }
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={3} borderRadius={"20px"} mt={2}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Typography fontSize='22px' fontWeight={550} color='neutral.Snowwhite'>
                        Sector Rotation
                    </Typography>
                    <Typography fontSize={"15px"} color='neutral.gray'>
                        Capital rotation by sector • 24h Performance
                    </Typography>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                    <CustomButton title={"Refresh"} icon={<img src={RelaodIcon} style={{ width: "25px", height: "25px" }} />} sx={{ backgroundColor: "neutral.vermilionOrange", color: "neutral.Snowwhite", fontSize: "17px", px: "15px", py: "5px", borderRadius: "10px", border: "1px solid rgba(127, 127, 127, 1)" }} />
                </Box>
            </Box>
            <Box mt={2}>
                <Grid container spacing={3}>
                    {selectorData.map((item) => (
                        <Grid item size={{ xs: 12, md: 2.4 }}>
                            <Box textAlign={"center"} bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={1.8}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600}>
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.vermilionOrange' fontWeight={600}>
                                        {item.value}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.lightgray' fontSize={"9px"}>
                                        {item.percen}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.lightgray' fontSize={"9px"}>
                                        {item.chnage}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Box bgcolor={"background.charcoal"} borderRadius={"28px"} mt={1.8} border={"1px solid rgba(43, 43, 43, 1)"} p={2}>
                <Box>
                    <Typography fontSize={"15px"} fontWeight={600}>
                        Rotation analysis:
                    </Typography>
                </Box>
                <Box>
                    <Typography fontSize={"12px"} color='neutral.gray'>
                        Gaming & NFTs lead the way with an 11.7% gain, as capital is actively flowing into this sector.  Strong rotation: 8.0% spread across sectors.
                    </Typography>
                </Box>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} display={"flex"} justifyContent={"center"} p={1.5} mt={2} borderRadius={"10px"}>
                <Typography color='rgba(255, 255, 255, 0.5)' fontSize={"13px"}>
                    Updated: 3:37:06 PM
                </Typography>
            </Box>
        </Box>
    )
}

export default SelectorRotation