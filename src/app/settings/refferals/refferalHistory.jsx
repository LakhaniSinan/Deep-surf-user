import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import PaginatedTable from "../../../components/dynamicTable";
import CustomButton from "../../../components/customButton";
import TransactionHistory from "./transactionHistory";




const WithDrawalRequestTransaction = () => {


    const recentRefferalHeaders = [
        { id: "id", label: "ID", align: "left" },
        { id: "referral date", label: "Referral Date", align: "left" },
        { id: "source", label: "Source", align: "right" },
        { id: "referral status", label: "Referral Status", align: "right" },
        { id: "commission", label: "Commission", align: "right" },

    ];


    const recentRefferalRows = [
        {
            userid: "#1",
            referralDate: "Nov 15, 2024",
            name: "Sarah Johnson",
            email: "sarah.johnson@email.com",
            referralStatus: "Payment Completed",
            commission: "$25.00",

        },
        {
            userid: "#1",
            referralDate: "Nov 18, 2024",
            name: "Michael Chen",
            email: "ssarah.johnson@email.com",
            referralStatus: "Sign up",
            commission: "0",

        },
        {
            userid: "#1",
            referralDate: "Nov 22, 2024",
            name: "Emily Rodriguez",
            email: "sarah.johnson@email.com",
            referralStatus: "Payment Completed",
            commission: "$25.00",

        },
        {
            userid: "#1",
            referralDate: "Nov 28, 2024",
            name: "David Kim",
            email: "sarah.johnson@email.com",
            referralStatus: "Sign up",
            commission: "0",

        },
    ];
    const [activeTab, setActiveTab] = useState("Referrals History");
    return (
        <Box bgcolor={"rgba(22, 22, 22, 1)"} borderRadius={"15px"} p={2} mt={2}>
            <Box>
                <Typography color="neutral.Snowwhite" variant="h2">
                    Withdrawal & Transaction
                </Typography>
            </Box>
            <Grid container spacing={1} mt={2}>
                <Grid item size={{ xs: 12, md: 6 }} >
                    <Box>
                        <CustomButton
                            title="Referrals History"
                            width="100%"
                            sx={{
                                backgroundColor: activeTab === "Referrals History"
                                    ? "neutral.vermilionOrange"
                                    : "neutral.charcoalGrey",
                                color: activeTab === "Referrals History" ? "neutral.Snowwhite" : "neutral.Snowwhite"

                            }}
                            onClick={() => setActiveTab("Referrals History")}
                        />
                    </Box>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }} >
                    <Box>
                        <CustomButton
                            title="Transaction History"
                            width="100%"
                            sx={{
                                backgroundColor: activeTab === "Transaction History"
                                    ? "neutral.vermilionOrange"
                                    : "neutral.charcoalGrey",
                                color: activeTab === "Referrals History" ? "neutral.Snowwhite" : "neutral.Snowwhite"

                            }}
                            onClick={() => setActiveTab("Transaction History")}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Box mt={2}>
                {
                    activeTab === "Referrals History" ? <Box mt={"10px"} >
                        <PaginatedTable
                            tableHeader={recentRefferalHeaders}
                            tableData={recentRefferalRows}
                            displayRows={["userid", "referralDate", "name", "refferal status", "commission"]}
                            isLoading={false}
                            showPagination={false}

                        />
                    </Box> : <TransactionHistory />
                }
            </Box>
        </Box>
    )
}

export default WithDrawalRequestTransaction;