import { Box, Stack, TableCell, Typography } from "@mui/material";
import subscriptionCard from "../../../assets/images/subscription.png";
import PaginatedTable from "../../../components/dynamicTable";
import { useTranslation } from "react-i18next";

const Subscription = () => {
  const { t } = useTranslation();
  const billingHistoryHeaders = [
    { id: "date", label: "Date", align: "left" },
    { id: "details", label: (t("Subscription.details")), align: "left" },
    { id: "amount", label: (t("Subscription.amount")), align: "right" },
    { id: "status", label: t("Subscription.status"), align: "right" },
  ];

  const billingHistoryRows = [
    {
      date: "07/08/2025",
      details: (t("Subscription.proPlanMonthly")),
      amount: "£30.00",
      status: (t("Subscription.success")),
    },
    {
      date: "06/07/2025",
      details: (t("Subscription.proPlanMonthly")),
      amount: "£30.00",
      status: (t("Subscription.success")),
    },
    {
      date: "05/06/2025",
      details: (t("Subscription.proPlanMonthly")),
      amount: "£30.00",
      status: (t("Subscription.success")),
    },
  ];

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Typography variant="titleLg">{t("Subscription.subscription")}</Typography>

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
          fontSize="18px"
          sx={{ color: "rgba(163, 163, 165, 1)" }}
        >
          {t("Subscription.billingHistory")}
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
