import { Box, TablePagination } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../../components/customButton";
import AddEditNewClientDialog from "./withdrawRequest";
import { transactionHistory } from "../../../services/modules/refferal";
import { toast } from "react-toastify";
import PaginatedTable from "../../../components/dynamicTable";

const TransactionHistory = () => {
    const allNewClienttEditRef = useRef();

    const [transactionData, setTransactionData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    console.log("eeeeeeeeeeeee", totalRecords);

    const [transactionPage, setTransactionPage] = useState(1);
    const [transactionLimit, setTransactionLimit] = useState(5);
    console.log("fffffffffffffffffff" , transactionData);
    

    const billingHistoryHeaders = [
        { id: "id", label: "ID", align: "left" },
        { id: "requestDate", label: "Request Date", align: "right" },
        { id: "batchNo", label: "Batch No", align: "right" },
        { id: "amount", label: "Amount", align: "right" },
        { id: "accountDetails", label: "Account Details", align: "right" },
        { id: "currency", label: "Currency", align: "right" },
        { id: "status", label: "Status", align: "right" },
        { id: "action", label: "Action", align: "right" },
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
            <Box display={"flex"} justifyContent={"right"} mb={1}>
                <CustomButton
                    title="Request Withdraw"
                    onClick={() => allNewClienttEditRef.current?.openDialog({ type: "add" })}
                    sx={{ backgroundColor: "neutral.vermilionOrange", borderRadius: "20px", fontSize: "15px" }}
                />
            </Box>

            <PaginatedTable
                tableHeader={billingHistoryHeaders}
                tableData={transactionData}
                displayRows={["id", "requestDate", "batchNo", "amount", "account", "currency", "status", "action"]}
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
            />


            <AddEditNewClientDialog ref={allNewClienttEditRef} />
        </Box>
    );
};

export default TransactionHistory;
