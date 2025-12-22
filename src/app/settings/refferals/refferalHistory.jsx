import { Box, Grid, TablePagination, Typography } from "@mui/material";
import React, { useState } from "react";
import PaginatedTable from "../../../components/dynamicTable";
import CustomButton from "../../../components/customButton";
import TransactionHistory from "./transactionHistory";

const WithDrawalRequestTransaction = ({
    referHistory,
    pagination,
    setPage,
    setLimit,
}) => {
    const [activeTab, setActiveTab] = useState("Referrals History");

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (event) => {
        const newLimit = parseInt(event.target.value, 10);
        setLimit(newLimit);
        setPage(1);
    };

    const recentRefferalHeaders = [
        { id: "id", label: "ID", align: "left" },
        { id: "referralDate", label: "Referral Date", align: "left" },
        { id: "name", label: "Source", align: "right" },
        { id: "referralStatus", label: "Referral Status", align: "right" },
        { id: "commission", label: "Commission", align: "right" },
    ];

    return (
        <Box bgcolor="rgba(22, 22, 22, 1)" borderRadius="15px" p={2} mt={2}>
            <Typography color="neutral.Snowwhite" variant="h2">
                Withdrawal & Transaction
            </Typography>

            <Grid container spacing={1} mt={2}>
                <Grid item size={{ xs: 12, md: 6 }} >
                    <CustomButton
                        title="Referrals History"
                        width="100%"
                        sx={{
                            backgroundColor:
                                activeTab === "Referrals History"
                                    ? "neutral.vermilionOrange"
                                    : "neutral.charcoalGrey",
                        }}
                        onClick={() => setActiveTab("Referrals History")}
                    />
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }} >
                    <CustomButton
                        title="Transaction History"
                        width="100%"
                        sx={{
                            backgroundColor:
                                activeTab === "Transaction History"
                                    ? "neutral.vermilionOrange"
                                    : "neutral.charcoalGrey",
                        }}
                        onClick={() => setActiveTab("Transaction History")}
                    />
                </Grid>
            </Grid>

            <Box mt={2}>
                {activeTab === "Referrals History" ? (
                    <>
                        <PaginatedTable
                            tableHeader={recentRefferalHeaders}
                            tableData={referHistory?.data || []}
                            displayRows={[
                                "id",
                                "referralDate",
                                "name",
                                "referralStatus",
                                "commission",
                            ]}
                            isLoading={false}
                            showPagination={false}
                        />

                        <TablePagination
                            component="div"
                            count={pagination?.total || 0}
                            page={(pagination?.page || 1) - 1}
                            rowsPerPage={pagination?.limit || 10}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            rowsPerPageOptions={[5, 10, 20, 50]}
                            sx={{
                                mt: 2,
                                ".MuiTablePagination-toolbar": {
                                    display: "flex",
                                    gap: "10px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontFamily: "inter Tight",
                                    color: "neutral.white",
                                },

                                ".MuiTablePagination-selectLabel": {
                                    color: "#ccc",
                                    fontFamily: "inter Tight",
                                    marginRight: "8px",
                                },

                                ".MuiTablePagination-select": {
                                    color: "white",
                                    border: "1px solid rgba(218, 218, 218, 1)",
                                    borderRadius: "5px",
                                    padding: "2px",
                                    backgroundColor: "#000",
                                    alignItems: "center"
                                },

                                ".MuiTablePagination-displayedRows": {
                                    color: "#ccc",
                                    fontFamily: "inter Tight",
                                    marginLeft: "8px",
                                },

                                ".MuiTablePagination-actions button": {
                                    color: "white",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                },
                            }}
                        />
                    </>
                ) : (
                    <TransactionHistory />
                )}
            </Box>
        </Box>
    );
};

export default WithDrawalRequestTransaction;
