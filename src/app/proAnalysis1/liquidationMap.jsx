import { Box } from '@mui/material'
import RelaodBtn from "../../assets/icons/relaod-Icon.svg"
import HeaderText from '../../components/headerText'

const LiquidationMap = () => {
    return (
        <Box bgcolor={"background.charcoal"} mt={2} p={4} borderRadius={"15px"}>
            <Box>
                <HeaderText
                    title={"Liquidation Map"}
                    tittleFontSize={"25px"}
                    color={"neutral.Snowwhite"}
                    icon={<img src={RelaodBtn} />}
                />
            </Box>
            
        </Box>
    )
}

export default LiquidationMap