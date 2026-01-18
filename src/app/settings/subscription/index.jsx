// import { Box, Stack, TableCell, Typography } from "@mui/material";
// import subscriptionCard from "../../../assets/images/subscription.png";
// import PaginatedTable from "../../../components/dynamicTable";
// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import getPaymentHistory from "../../../services/modules/payment";
// import { toast } from "react-toastify";
// import moment from "moment";

// const Subscription = () => {
//   const [isLoading, setIsLaoding] = useState(false)
//   const [paymentHistory, setPaymentHistory] = useState(null)
//   const handlePaymenthistory = async () => {
//     try {
//       setIsLaoding(true)
//       const response = await getPaymentHistory();
//       const data = response?.data?.data;
//       setPaymentHistory(data)
//       toast.success(response?.data?.message)
//     } catch (error) {
//       toast.error(response?.data?.message)
//     } finally {
//       setIsLaoding(false)
//     }
//   }
//   useEffect(() => {
//     handlePaymenthistory()
//   }, [])

//   const mappedPaymentHistory = paymentHistory?.map(item => ({
//     date: moment(item.created_at).format("DD/MM/YYYY"),
//     details: item.subscription_name,
//     amount: `$${item.price_amount}`,
//     status: item.payment_status
//   }));

//   const { t } = useTranslation();
//   const billingHistoryHeaders = [
//     { id: "date", label: "Date", align: "left" },
//     { id: "details", label: (t("Subscription.details")), align: "left" },
//     { id: "amount", label: (t("Subscription.amount")), align: "right" },
//     { id: "status", label: t("Subscription.status"), align: "right" },
//   ];



//   return (
//     <Box display="flex" flexDirection="column" gap={4}>
//       <Typography variant="titleLg">{t("Subscription.subscription")}</Typography>

//       <Box

//       />

//       <Stack spacing={2}>
//         <Typography
//           variant="labelMd"
//           fontSize="18px"
//           sx={{ color: "rgba(163, 163, 165, 1)" }}
//         >
//           {t("Subscription.billingHistory")}
//         </Typography>
//         <Box
//           sx={{
//             backgroundColor: "rgba(22,22,22,0.85)",
//             borderRadius: "18px",
//             border: "1px solid rgba(255,255,255,0.08)",
//             overflow: "hidden",
//           }}
//         >
//           <PaginatedTable
//             displayRows={["date", "details", "amount", "status"]} // ✅ updated
//             tableHeader={billingHistoryHeaders}
//             tableData={mappedPaymentHistory}
//             isLoading={false}
//             showPagination={false}

//           />
//         </Box>
//       </Stack>
//     </Box>
//   );
// };

// export default Subscription;
// import { Box, Stack, TableCell, Typography } from "@mui/material";
// import subscriptionCard from "../../../assets/images/subscription.png";
// import PaginatedTable from "../../../components/dynamicTable";
// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import getPaymentHistory from "../../../services/modules/payment";
// import { toast } from "react-toastify";
// import moment from "moment";
// import subscription1 from "../../../assets/icons/subscription1.svg"
// import subscription2 from "../../../assets/icons/subscription2.svg"
// import subscription3 from "../../../assets/icons/subscription3.svg"
// import deepSurfLogo from "../../../assets/icons/deepSurf.svg"


// const Subscription = () => {
//   const [isLoading, setIsLaoding] = useState(false)
//   const [paymentHistory, setPaymentHistory] = useState(null)
//   const handlePaymenthistory = async () => {
//     try {
//       setIsLaoding(true)
//       const response = await getPaymentHistory();
//       const data = response?.data?.data;
//       setPaymentHistory(data)
//       toast.success(response?.data?.message)
//     } catch (error) {
//       toast.error(response?.data?.message)
//     } finally {
//       setIsLaoding(false)
//     }
//   }
//   useEffect(() => {
//     handlePaymenthistory()
//   }, [])

//   const mappedPaymentHistory = paymentHistory?.map(item => ({
//     date: moment(item.created_at).format("DD/MM/YYYY"),
//     details: item.subscription_name,
//     amount: `$${item.price_amount}`,
//     status: item.payment_status
//   }));

//   const { t } = useTranslation();
//   const billingHistoryHeaders = [
//     { id: "date", label: "Date", align: "left" },
//     { id: "details", label: (t("Subscription.details")), align: "left" },
//     { id: "amount", label: (t("Subscription.amount")), align: "right" },
//     { id: "status", label: t("Subscription.status"), align: "right" },
//   ];

//   return (
//     <Box display="flex" flexDirection="column" gap={4}>
//       <Typography variant="titleLg">{t("Subscription.subscription")}</Typography>

//       {/* Subscription Card */}
//       <Box
//         sx={{
//           position: 'relative',
//           background: 'linear-gradient(135deg, #FF6B1A 0%, #FF8C42 50%, #FFA726 100%)',
//           borderRadius: 4,
//           overflow: 'hidden',
//           p: 4,
//           maxWidth: 550,
//           height: 240,
//           boxShadow: '0 20px 60px rgba(255, 107, 26, 0.4)',
//         }}
//       >
//         {/* Decorative shapes - matching original design */}
//         <Box
//           component="img"
//           src={subscription1}
//           sx={{
//             position: 'absolute',
//             top: '-15%',
//             right: '5%',
//             width: '280px',
//             height: 'auto',
//             opacity: 0.9,
//             zIndex: 2,
//           }}
//         />
//         <Box
//           component="img"
//           src={subscription2}
//           sx={{
//             position: 'absolute',
//             top: '20%',
//             right: '10%',
//             width: '200px',
//             height: 'auto',
//             opacity: 0.85,
//             zIndex: 1,
//           }}
//         />

//         {/* Content */}
//         <Box sx={{ position: 'relative', zIndex: 3 }}>
//           {/* Logo and Brand */}
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//             <Box
//               component="img"
//               src={deepSurfLogo}
//               alt="DEEPSURF Logo"
//               sx={{
//                 width: 32,
//                 height: 32,
//               }}
//             />
//             <Typography
//               sx={{
//                 color: 'white',
//                 fontWeight: 700,
//                 letterSpacing: '1px',
//                 fontSize: '14px',
//                 textTransform: 'uppercase',
//               }}
//             >
//               DEEPSURF
//             </Typography>
//           </Box>

//           {/* PRO Title */}
//           <Typography
//             sx={{
//               color: 'white',
//               fontWeight: 'bold',
//               fontSize: '64px',
//               lineHeight: 0.9,
//               mb: 1.5,
//               letterSpacing: '-1px',
//             }}
//           >
//             PRO
//           </Typography>

//           {/* Subscription Info */}
//           <Typography
//             sx={{
//               color: 'white',
//               mb: 3,
//               fontSize: '15px',
//               fontWeight: 400,
//             }}
//           >
//             21 days remaining/month
//           </Typography>

//           {/* Active Status Badge */}
//           <Box
//             sx={{
//               bgcolor: 'white',
//               color: '#1a1a1a',
//               fontWeight: 600,
//               fontSize: '15px',
//               height: 44,
//               borderRadius: 3,
//               px: 4,
//               display: 'inline-flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               minWidth: 180,
//               cursor: 'pointer',
//               transition: 'all 0.2s',
//               '&:hover': {
//                 bgcolor: '#f5f5f5',
//                 transform: 'scale(1.02)',
//               },
//             }}
//           >
//             Active
//           </Box>
//         </Box>
//       </Box>

//       <Stack spacing={2}>
//         <Typography
//           variant="labelMd"
//           fontSize="18px"
//           sx={{ color: "rgba(163, 163, 165, 1)" }}
//         >
//           {t("Subscription.billingHistory")}
//         </Typography>
//         <Box
//           sx={{
//             backgroundColor: "rgba(22,22,22,0.85)",
//             borderRadius: "18px",
//             border: "1px solid rgba(255,255,255,0.08)",
//             overflow: "hidden",
//           }}
//         >
//           <PaginatedTable
//             displayRows={["date", "details", "amount", "status"]}
//             tableHeader={billingHistoryHeaders}
//             tableData={mappedPaymentHistory}
//             isLoading={false}
//             showPagination={false}
//           />
//         </Box>
//       </Stack>
//     </Box>
//   );
// };

// export default Subscription;
import { Box, Stack, Typography } from "@mui/material";
import PaginatedTable from "../../../components/dynamicTable";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getPaymentHistory, getPaymentSubscription } from "../../../services/modules/payment";
import { toast } from "react-toastify";
import moment from "moment";
import subscription1 from "../../../assets/icons/subscription1.svg"
import subscription2 from "../../../assets/icons/subscription2.svg"
import subscription3 from "../../../assets/icons/subscription3.svg"
import deepSurfLogo from "../../../assets/icons/deepSurf.svg"
import SubscriptionSkeleton from "../../../components/skeleton/subscription";

const Subscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentHistory, setPaymentHistory] = useState(null);
  const [paymentSubscription, setPaymentSubscription] = useState(null);

  const handlePaymentHistory = async () => {
    try {
      setIsLoading(true);
      const response = await getPaymentHistory();
      const data = response?.data?.data;
      setPaymentHistory(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentSubscription = async () => {
    try {
      setIsLoading(true);
      const response = await getPaymentSubscription();
      const data = response?.data?.data;
      setPaymentSubscription(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handlePaymentHistory();
    handlePaymentSubscription();
  }, []);

  const mappedPaymentHistory = paymentHistory?.map(item => ({
    date: moment(item.created_at).format("DD/MM/YYYY"),
    details: item.subscription_name,
    amount: `$${item.price_amount}`,
    status: item.payment_status
  }));

  const getMonthText = () => {
    const planName = paymentSubscription?.subscriptionName?.toLowerCase();
    if (planName?.includes("quaterly plan")) return "3 months";
    else if (planName?.includes("half yearly plan")) return "6 months";
    else return "month";
  };

  const { t } = useTranslation();
  const billingHistoryHeaders = [
    { id: "date", label: "Date", align: "left" },
    { id: "details", label: t("Subscription.details"), align: "left" },
    { id: "amount", label: t("Subscription.amount"), align: "right" },
    { id: "status", label: t("Subscription.status"), align: "right" },
  ];

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Typography variant="titleLg">{t("Subscription.subscription")}</Typography>

      {/* ✅ Skeleton or Actual Content */}
      {isLoading ? (
        <SubscriptionSkeleton />
      ) : (
        <>
          {/* Subscription Card */}
          <Box
            sx={{
              position: 'relative',
              background: 'linear-gradient(135deg, #FF6B1A 0%, #FF8C42 50%, #FFA726 100%)',
              borderRadius: "30px",
              overflow: 'hidden',
              p: 3,
              maxWidth: 520,
              height: 200,
              // boxShadow: '0 20px 60px rgba(255, 107, 26, 0.4)',
            }}
          >
            <Box component="img" src={subscription1} sx={{ position: 'absolute', top: '-30%', right: '-10%', width: '260px', height: 'auto', zIndex: 2 }} />
            <Box component="img" src={subscription2} sx={{ position: 'absolute', top: '15%', right: '8%', width: '180px', height: 'auto', zIndex: 1 }} />
            <Box component="img" src={subscription3} sx={{ position: 'absolute', bottom: '1%', right: '1%', width: '70px', height: 'auto', zIndex: 0 }} />

            <Box sx={{ position: 'relative', zIndex: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 0.8 }}>
                <Box component="img" src={deepSurfLogo} sx={{ width: 24, height: 24 }} />
                <Typography sx={{ color: 'white', fontWeight: 600, letterSpacing: '0.8px', fontSize: '12px', textTransform: 'uppercase' }}>
                  DEEPSURF
                </Typography>
              </Box>

              <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 35, lineHeight: 0.95, mb: 1, letterSpacing: '-1.5px' }}>
                {paymentSubscription?.subscriptionName}
              </Typography>

              <Typography sx={{ color: 'white', mb: 2, fontSize: 13 }}>
                {paymentSubscription?.daysRemainingText} / {getMonthText()}
              </Typography>

              <Box
                sx={{
                  bgcolor: 'white',
                  color: '#1a1a1a',
                  fontWeight: 600,
                  fontSize: 14,
                  height: 38,
                  borderRadius: 2.5,
                  px: 3.5,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 160,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': { bgcolor: '#f5f5f5', transform: 'scale(1.02)' }
                }}
              >
                {paymentSubscription?.paymentStatus === "paid" ? "Active" : "No Active"}
              </Box>
            </Box>
          </Box>

          {/* Billing History */}
          <Stack spacing={2}>
            <Typography variant="labelMd" fontSize={18} sx={{ color: "rgba(163, 163, 165, 1)" }}>
              {t("Subscription.billingHistory")}
            </Typography>
            <Box sx={{ backgroundColor: "rgba(22,22,22,0.85)", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <PaginatedTable
                displayRows={["date", "details", "amount", "status"]}
                tableHeader={billingHistoryHeaders}
                tableData={mappedPaymentHistory}
                isLoading={isLoading}
                showPagination={false}
              />
            </Box>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Subscription;
