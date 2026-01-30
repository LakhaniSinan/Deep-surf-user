import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";
import ReferralIcon from "../../../assets/icons/referral-active.svg";
import DollarsIcon from "../../../assets/icons/dollar-icon.svg";
import WalletIcon from "../../../assets/icons/wallet-icon.svg";
import PercentageIcon from "../../../assets/icons/percentage-icon.svg";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import WithDrawalRequestTransaction from "./refferalHistory";
import { refferalStats, refferHistory } from "../../../services/modules/refferal";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
const Referrals = () => {
  const [referralLink] = useState("https://deepsurf.io/refer/ht5gh");
  const [promoCode] = useState("76913284");
  const [copiedField, setCopiedField] = useState(null);
  const [referalsStats, setRefferalStats] = useState(null);
  const [refferHistoryData, setRefferalHistoryData] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(0);
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0)
  console.log("ffgrufgrufgrf", activeTab);

  const handleCopy = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1500);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  const handleRefferalsStats = async () => {
    try {
      setIsLoading(true);
      const response = await refferalStats();
      setRefferalStats(response?.data?.data);
    } catch (error) {
      toast.error("Failed to fetch referral stats");
    } finally {
      setIsLoading(false);
    }
  };

  const refferalHistory = async () => {
    try {
      setIsLoading(true);
      const response = await refferHistory({ page, limit });
      setRefferalHistoryData(response?.data?.data);
      setPagination(response?.data?.data?.pagination);
    } catch (error) {
      toast.error("Failed to fetch referral history");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleRefferalsStats();
  }, []);

  useEffect(() => {
    refferalHistory();
  }, [page, limit]);
  const levelSystemData = [
    {
      packageName: "Basic (5%)",
      refferalQunatity: "Up to 20 referrals",
      commision: "$5.75 per subscription"
    },
    {
      packageName: "Standard (10%)",
      refferalQunatity: "More than 50 referrals",
      commision: "$11.50 per subscription"
    },
    {
      packageName: "Professional (15%)",
      refferalQunatity: "More than 350 referrals",
      commision: "$17.25 per subscription"
    },
    {
      packageName: "Master's degree (20%)",
      refferalQunatity: "More than 350 referrals",
      commision: "$23.00 per subscription"
    }
  ]

  return (
    <>
      <Box display="flex" flexDirection="column" gap={4} p={2}>
        <Typography variant="titleLg">{t("Referrals.refferralsTitle")}</Typography>
        <Box>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center" justifyContent="space-between">
            {/* Total Referrals */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  component="img"
                  src={ReferralIcon}
                  alt="Referrals icon"
                  sx={{ width: 60, height: 60, borderRadius: "18px", backgroundColor: "rgba(255,255,255,0.06)", p: 1.5 }}
                />
                <Stack spacing={0.5}>
                  <Typography variant="labelMd" sx={{ color: "neutral.Snowwhite" }}>{t("Referrals.totalRefferal")}</Typography>
                  <Typography variant="h4" sx={{ color: "neutral.Snowwhite" }}>{referalsStats?.totalReferrals}</Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Total Earning */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  component="img"
                  src={DollarsIcon}
                  alt="Referrals icon"
                  sx={{ width: 60, height: 60, borderRadius: "18px", backgroundColor: "rgba(255,255,255,0.06)", p: 1.5 }}
                />
                <Stack spacing={0.5}>
                  <Typography variant="labelMd" sx={{ color: "neutral.Snowwhite" }}>{t("Referrals.totalEarning")}</Typography>
                  <Typography variant="h4" sx={{ color: "neutral.Snowwhite" }}>{referalsStats?.totalEarning}</Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Commission */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  component="img"
                  src={PercentageIcon}
                  alt="Referrals icon"
                  sx={{ width: 60, height: 60, borderRadius: "18px", backgroundColor: "rgba(255,255,255,0.06)", p: 1.5 }}
                />
                <Stack spacing={0.5}>
                  <Typography variant="labelMd" sx={{ color: "neutral.Snowwhite" }}>{t("Referrals.commission")}</Typography>
                  <Typography variant="h4" sx={{ color: "neutral.Snowwhite" }}>{referalsStats?.commission}</Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Wallet Balance */}
            <Grid item size={{ xs: 12, md: 6 }} >
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  component="img"
                  src={WalletIcon}
                  alt="Referrals icon"
                  sx={{ width: 60, height: 60, borderRadius: "18px", backgroundColor: "rgba(255,255,255,0.06)", p: 1.5 }}
                />
                <Stack spacing={0.5}>
                  <Typography variant="labelMd" sx={{ color: "neutral.Snowwhite", fontWeight: "700" }}>{t("Referrals.walletBalance")}</Typography>
                  <Typography variant="h4" sx={{ color: "neutral.Snowwhite" }}>{referalsStats?.walletBalance}</Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Referral Link */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack spacing={1.5}>
                <Typography variant="labelMd" fontSize="15px" sx={{ color: "#C7C7C7" }}>{t("Referrals.yourRefferalLink")}</Typography>
                <CustomInput
                  value={referalsStats?.referralLink || referralLink}
                  fullWidth
                  readonly
                  InputEndIcon={<ContentCopyRoundedIcon fontSize="small" sx={{ color: "rgba(142, 142, 142, 1)" }} />}
                  onEndIconClick={() => handleCopy(referralLink, "link")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      border: "0.3px solid rgba(124, 125, 127, 1)",
                      borderRadius: "10px"
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "rgba(124, 125, 127, 1)"
                    }
                  }}
                />

                {copiedField === "link" && (
                  <Typography variant="helperSm" sx={{ color: "#5CB85C" }}>{t("Referrals.linkCopied")}</Typography>
                )}
                <Typography color="rgba(163, 163, 165, 1)" fontSize={"14px"} fontWeight={500}>
                  Share the link below with your friends
                </Typography>
              </Stack>
            </Grid>

            {/* Promo Code */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack spacing={1} alignItems="flex-start">
                <Typography variant="labelMd" fontWeight={400} fontSize="15px" sx={{ color: "neutral.Snowwhite" }}>{t("Referrals.promoCode")}</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="h5" sx={{ color: "#FF6421" }}>{referalsStats?.referralCode || promoCode}</Typography>
                  <CustomButton
                    title={copiedField === "code" ? "Copied!" : ""}
                    handleClickBtn={() => handleCopy(promoCode, "code")}
                    width="auto"
                    sx={{ border: "none", backgroundColor: "transparent", color: "rgba(142, 142, 142, 1)", minWidth: 0, px: 1 }}
                    icon={<ContentCopyRoundedIcon fontSize="small" />}
                  />
                </Stack>
                {copiedField === "code" && (
                  <Typography variant="helperSm" sx={{ color: "#5CB85C" }}>{t("Referrals.promoCodeCopied!")}</Typography>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={2}>
          <Box>
            <Typography color="neutral.Snowwhite" fontSize={"20px"} fontWeight={600}>
              Level System
            </Typography>
          </Box>
          <Box mt={2}>
            <Grid container spacing={2}>
              {levelSystemData.map((item, index) => (
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Box bgcolor={activeTab === index
                    ? "neutral.vermilionOrange"
                    : "rgba(44, 44, 44, 1)"} p={1.2} borderRadius={"12px"} key={index} sx={{ cursor: "pointer" }} onClick={() => setActiveTab(index)}>
                    <Box >
                      <Typography fontSize={"20px"} fontWeight={600} color={activeTab === index ? "rgba(255, 255, 255, 1)" : "rgba(171, 175, 180, 1)"}>
                        {item.packageName}
                      </Typography>
                      <Typography fontSize={"12px"} color={activeTab === index ? "rgba(255, 255, 255, 1)" : "rgba(171, 175, 180, 1)"}>
                        {item.refferalQunatity}
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      <Typography fontSize={"12px"} color={activeTab === index ? "rgba(255, 255, 255, 1)" : "rgba(171, 175, 180, 1)"}>
                        {item.commision}
                      </Typography>
                    </Box>
                  </Box>

                </Grid>
              ))}

            </Grid>
          </Box>

        </Box>
      </Box>

      {/* Transaction & Referral History Table */}
      <Box>
        <WithDrawalRequestTransaction
          referHistory={refferHistoryData}
          pagination={pagination}
          setPage={setPage}
          setLimit={setLimit}
        />
      </Box>
    </>
  );
};

export default Referrals;
