import { Box, Typography } from '@mui/material'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import HeaderText from '../../components/headerText'
import AccordingHeader from '../../components/accordingHeader'
import CustomInput from '../../components/customInput'
import SearchIcon from "../../assets/icons/Vector.svg"
import PaginatedTable from '../../components/dynamicTable'
import { useState } from 'react'
import WarningTips from './warningTips'


const Correlation = () => {
    const [loading, setIsLoading] = useState(false)

    const billingHistoryHeaders = [
        { id: "BTC", label: "BTC", align: "left" },
        { id: "ETH", label: "ETH", align: "left" },
        { id: "SOL", label: "SOL", align: "right" },
        { id: "BNB", label: "BNB", align: "right" },
        { id: "AVAX", label: "AVAX", align: "right" },
        { id: "LINK", label: "LINK", align: "right" },
        { id: "MATIC", label: "MATIC", align: "right" },


    ];
    const billingHistoryTable = [
        {
            btcvale: "1.00",
            ethValue: "0.81",
            solValue: "0.78",
            bnbValue: "0.76",
            avaxValue: "0.78",
            linkValue: "69",
            maticValue: "166.9"

        },
        {
            btcvale: "1.00",
            ethValue: "0.81",
            solValue: "0.78",
            bnbValue: "0.76",
            avaxValue: "0.78",
            linkValue: "69",
            maticValue: "166.9"

        },
        {
            btcvale: "1.00",
            ethValue: "0.81",
            solValue: "0.78",
            bnbValue: "0.76",
            avaxValue: "0.78",
            linkValue: "69",
            maticValue: "166.9"

        }
    ]
    const data = [
        "Correlation 0.8-1.0 - move together (bad for hedge)",
        "Correlation 0.3-0.7 - partially related",
        " Correlation -1.0-0.3 - move independently (good for hedge)",
        "Negative correlation - perfect hedge!",

    ]
    return (
        <Box bgcolor={"background.charcoal"} p={3} mt={1.5} borderRadius={"10px"}>
            <Box mt={2}>
                <HeaderText
                    title={"Correlations & Hedge Finder"}
                    btnText={"Load"}
                    color={"neutral.Snowwhite"}
                    tittleFontSize={"22px"}
                />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={3} mt={2}>
                <Box>
                    <HeaderText
                        title={"What Correlation Matrix shows:"}
                        tittleFontSize={"15px"}
                        color={"neutral.Snowwhite"}
                        icon={<img src={ArrowBtn} />}
                    />
                </Box>
                <Box>
                    {data.map((item, index) => (
                        <AccordingHeader tittle={item} key={index} fontSize={"13px"} />
                    ))}
                </Box>
                <Box mt={3}>
                    <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                        How to use: If your position is in ETH, find an asset with low correlation for risk hedge
                    </Typography>
                </Box>
            </Box>
            <Box mt={2}>
                <Typography color='neutral.Snowwhite'>
                    AI Hedge Finder
                </Typography>
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
            </Box>
            <Box mt={2}>
                <PaginatedTable
                    displayRows={["btcvale", "ethValue", "solValue", "bnbValue", "avaxValue", "linkValue", "maticValue"]}
                    tableHeader={billingHistoryHeaders}
                    tableData={billingHistoryTable}
                    isLoading={loading}
                    showPagination={false}

                />
            </Box>
            <Box>
                <WarningTips />
            </Box>
        </Box>
    )
}

export default Correlation