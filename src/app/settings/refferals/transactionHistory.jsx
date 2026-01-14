import { Box, TablePagination, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../../components/customButton";
import AddEditNewClientDialog from "./withdrawRequest";
import { transactionHistory } from "../../../services/modules/refferal";
import { toast } from "react-toastify";
import PaginatedTable from "../../../components/dynamicTable";
import { t } from "i18next";

const TransactionHistory = () => {
    const allNewClienttEditRef = useRef();
    const [transactionData, setTransactionData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [transactionPage, setTransactionPage] = useState(1);
    const [transactionLimit, setTransactionLimit] = useState(5);
    const billingHistoryHeaders = [
        { id: "id", label: (t("Referrals.id")), align: "left" },
        { id: "requestDate", label: (t("Referrals.requestdate")), align: "right" },
        { id: "batchNo", label: (t("Referrals.batchno")), align: "right" },
        { id: "amount", label: (t("Subscription.amount")), align: "right" },
        { id: "accountDetails", label: (t("Referrals.account")), align: "right" },
        { id: "currency", label: (t("setting.currency")), align: "right" },
        { id: "status", label: (t("setting.status")), align: "right" },
        { id: "action", label: (t("setting.action")), align: "right" },
    ];

    const fetchTransactionData = async () => {
        try {
            setIsLoading(true);
            const response = await transactionHistory({
                page: transactionPage,
                limit: transactionLimit,
            });

            if (response?.data?.status === "success") {
                setTransactionData(response?.data?.data?.data || []);
                setTotalRecords(response?.data?.data?.pagination?.total || 0);
            }
        } catch (error) {
            toast.error("Failed to fetch transaction history");
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchTransactionData();
    }, [transactionPage, transactionLimit]);

    return (
        <Box bgcolor={"rgba(22, 22, 22, 1)"} borderRadius={"15px"} p={2} mt={1}>
            <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
                <CustomButton
                    title={t("Referrals.requestwithdraw")}
                    onClick={() => allNewClienttEditRef.current?.openDialog({ type: "add" })}
                    sx={{ backgroundColor: "neutral.vermilionOrange", borderRadius: "20px", fontSize: "15px" }}
                />
            </Box>

            <PaginatedTable
                tableHeader={billingHistoryHeaders}
                tableData={transactionData}
                displayRows={["id", "requestDate", "batchNo", "amount", "walletAddress", "currency", "status", "action"]}
                isLoading={isLoading}
                showPagination={false}
            />

            <TablePagination
                component="div"
                count={totalRecords}
                page={transactionPage - 1}
                rowsPerPage={transactionLimit}
                onPageChange={(event, newPage) => setTransactionPage(newPage + 1)}
                onRowsPerPageChange={(event) => {
                    const newLimit = parseInt(event.target.value, 10);
                    setTransactionLimit(newLimit);
                    setTransactionPage(1);
                }}
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


            <AddEditNewClientDialog ref={allNewClienttEditRef} />
        </Box>
    );
};

export default TransactionHistory;
