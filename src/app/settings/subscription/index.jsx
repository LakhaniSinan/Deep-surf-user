import { Box, Stack, TableCell, Typography } from "@mui/material";
import subscriptionCard from "../../../assets/images/subscription.png";
import PaginatedTable from "../../../components/dynamicTable";

const billingHistoryHeaders = [
  { id: "date", label: "Date", align: "left" },
  { id: "details", label: "Details", align: "left" },
  { id: "amount", label: "Amount", align: "right" },
  { id: "status", label: "Status", align: "right" },
];

const billingHistoryRows = [
  {
    date: "07/08/2025",
    details: "PRO plan, monthly",
    amount: "£30.00",
    status: "Successful",
  },
  {
    date: "06/07/2025",
    details: "PRO plan, monthly",
    amount: "£30.00",
    status: "Successful",
  },
  {
    date: "05/06/2025",
    details: "PRO plan, monthly",
    amount: "£30.00",
    status: "Successful",
  },
];

const Subscription = () => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Typography variant="titleLg">Subscription</Typography>

      <Box
        component="img"
        src={subscriptionCard}
        alt="subscription summary"
        sx={{
          maxWidth: 420,
          width: "100%",
          borderRadius: "28px",
          boxShadow: "0px 24px 48px rgba(0,0,0,0.35)",
        }}
      />

      <Stack spacing={2}>
        <Typography
          variant="labelMd"
          fontSize="14px"
          sx={{ color: "#C7C7C7" }}
        >
          Billing History
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(22,22,22,0.85)",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <PaginatedTable
            tableHeader={billingHistoryHeaders}
            tableData={billingHistoryRows}
            displayRows={["date", "details", "amount", "status"]}
            isLoading={false}
            showPagination={false}

          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Subscription;
