import { Box, Typography } from '@mui/material'
import RealodIcon from "../../assets/icons/relaod-Icon.svg"
import HeaderText from '../../components/headerText'
import CustomInput from '../../components/customInput'
import SearchIcon from "../../assets/icons/Vector.svg"


const FutureMetric = () => {
    const futureMetricData = [
        {
            title: "Funding Rate",
            value: "0.000%",
            symbol: "Neutral"
        },
         {
            title: "Open Interest",
            value: "1.5M",
            symbol: "+3.70% (24h)"
        },
        {
            title: "L/S Positions",
            value: "2.34",
            symbol: <Prog
        }
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={2} mt={2} borderRadius={"10px"}>
            <Box mt={2}>
                <HeaderText
                    title={"Futures Metrics"}
                    icon={<img src={RealodIcon} />}
                    color={"neutral.Snowwhite"}
                />
            </Box>
            <Box mt={2}>
                <CustomInput
                    placeholder="ETH"
                    InputEndIcon={<img src={SearchIcon} />}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            border: "0.1px solid rgba(127, 127, 127, 1)",
                            borderRadius: "20px",
                        }
                    }}
                />
            </Box>
            <Box mt={2}>
                <Typography textAlign={"center"} color='neutral.Snowwhite' fontSize={"25px"}>
                    Current ETH Price
                </Typography>
                <Typography textAlign={"center"} color='neutral.Snowwhite' fontSize={"30px"} fontWeight={600}>
                    $4,321.7
                </Typography>
            </Box>
        </Box>
    )
}

export default FutureMetric