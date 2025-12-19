import { Box, Grid, TablePagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PaginatedTable from "../../../components/dynamicTable";
import CustomButton from "../../../components/customButton";
import TransactionHistory from "./transactionHistory";
import { transactionHistory } from "../../../services/modules/refferal";
import { toast } from "react-toastify";

const WithDrawalRequestTransaction = ({ referHistory, pagination, setPage, setLimit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [transactionHistoryData, setTransactionHistoryData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(pagination?.limit || 10);
    const [transactionPage, setTransactionPage] = useState(1);
    const [transactionLimit, setTransactionLimit] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1); // Referrals History pagination
    };

    const handleChangeRowsPerPage = (event) => {
        const newLimit = parseInt(event.target.value, 10);
        setRowsPerPage(newLimit);
        setLimit(newLimit); // Update parent limit
        setPage(1); // Reset page to 1
    };

    // Transaction History fetch with pagination
    const fetchTransactionHistory = async () => {
        try {
            setIsLoading(true);
            const response = await transactionHistory({
                page: transactionPage,
                limit: transactionLimit,
            });
            setTransactionHistoryData(response?.data?.data || []);
        } catch (error) {
            toast.error("Failed to fetch transaction history data");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactionHistory();
    }, [transactionPage, transactionLimit]);

    const recentRefferalHeaders = [
        { id: "id", label: "ID", align: "left" },
        { id: "referral date", label: "Referral Date", align: "left" },
        { id: "source", label: "Source", align: "right" },
        { id: "referral status", label: "Referral Status", align: "right" },
        { id: "commission", label: "Commission", align: "right" },
    ];

    const [activeTab, setActiveTab] = useState("Referrals History");

    return (
        <Box bgcolor={"rgba(22, 22, 22, 1)"} borderRadius={"15px"} p={2} mt={2}>
            <Typography color="neutral.Snowwhite" variant="h2">Withdrawal & Transaction</Typography>

            <Grid container spacing={1} mt={2}>
                <Grid item size={{xs : 6}} >
                    <CustomButton
                        title="Referrals History"
                        width="100%"
                        sx={{
                            backgroundColor: activeTab === "Referrals History" ? "neutral.vermilionOrange" : "neutral.charcoalGrey",
                            color: "neutral.Snowwhite"
                        }}
                        onClick={() => setActiveTab("Referrals History")}
                    />
                </Grid>
                <Grid item size={{xs : 6}}>
                    <CustomButton
                        title="Transaction History"
                        width="100%"
                        sx={{
                            backgroundColor: activeTab === "Transaction History" ? "neutral.vermilionOrange" : "neutral.charcoalGrey",
                            color: "neutral.Snowwhite"
                        }}
                        onClick={() => setActiveTab("Transaction History")}
                    />
                </Grid>
            </Grid>

            <Box mt={2}>
                {activeTab === "Referrals History" ? (
                    <Box mt="10px">
                        <PaginatedTable
                            tableHeader={recentRefferalHeaders}
                            tableData={referHistory?.data || []}
                            displayRows={["id", "referralDate", "name", "referralStatus", "commission"]}
                            isLoading={false}
                            showPagination={false}
                        />
                        <TablePagination
                            component="div"
                            count={pagination?.total || 0}
                            page={(pagination?.page || 1) - 1}
                            rowsPerPage={pagination?.limit || rowsPerPage}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Box>
                ) : (
                    <TransactionHistory
                        userTransactionHistory={transactionHistoryData}
                        transactionPage={transactionPage}
                        transactionLimit={transactionLimit}
                        setTransactionPage={setTransactionPage}
                        setTransactionLimit={setTransactionLimit}
                    />
                )}
            </Box>
        </Box>
    );
};

export default WithDrawalRequestTransaction;
