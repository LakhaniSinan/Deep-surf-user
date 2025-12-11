import { Box, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import PaginatedTable from "../../../components/dynamicTable";
import CustomButton from "../../../components/customButton";
import AddEditClientDialog from "./withdrawRequest";
import AddEditNewClientDialog from "./withdrawRequest";




const TransactionHistory = () => {

    const allNewClienttEditRef = useRef();



    const billingHistoryHeaders = [
        { id: "id", label: "ID", align: "left" },
        { id: "totalreffered", label: "Request Date", align: "right" },
        { id: "batchno", label: "Batch No", align: "right" },
        { id: "signup", label: "Amount", align: "right" },
        { id: "signup", label: "Account Details", align: "right" },
        { id: "signup", label: "Currency", align: "right" },
        { id: "signup", label: "Status", align: "right" },
        { id: "signup", label: "Action", align: "right" },


    ];


    const billingHistoryRows = [
        {
            date: "01",
            requestDate: "Dec 5, 2024, 02:30 PM",
            batchNo: "#1024",
            amount: "$0.19",
            accountDetails: "****4321",
            Currency: "USD",
            Status: "In Progress"
        },
        {
            date: "01",
            requestDate: "Dec 5, 2024, 02:30 PM",
            batchNo: "#1023",
            amount: "$0.19",
            accountDetails: "****7890",
            Currency: "USD",
            Status: "Completed"
        },
        {
            date: "01",
            requestDate: "Dec 5, 2024, 02:30 PM",
            batchNo: "#1022",
            amount: "$0.19",
            accountDetails: "****5678",
            Currency: "USD",
            Status: "Completed"
        },
        {
            date: "01",
            requestDate: "Dec 5, 2024, 02:30 PM",
            batchNo: "#1021",
            amount: "$0.19",
            accountDetails: "****9012",
            Currency: "USD",
            Status: "In Progress"
        },
    ];

    return (
        <Box bgcolor={"rgba(22, 22, 22, 1)"} borderRadius={"15px"} p={2} mt={1}>
            <Box display={"flex"} justifyContent={"right"}>
                <CustomButton
                    title="Request Withdraw"
                    onClick={() => allNewClienttEditRef.current?.openDialog({ type: "add" })}
                    sx={{
                        backgroundColor: "neutral.vermilionOrange",
                        borderRadius: "20px",
                        fontSize: "15px"
                    }}
                />
            </Box>
            <Box mt={"10px"} >
                <PaginatedTable
                    tableHeader={billingHistoryHeaders}
                    tableData={billingHistoryRows}
                    displayRows={["date", "requestDate", "batchNo", "amount", "accountDetails", "Currency", "Status", "action"]}
                    isLoading={false}
                    showPagination={false}

                />
            </Box>
            <AddEditNewClientDialog ref={allNewClienttEditRef} />

        </Box>
    )
}


export default TransactionHistory;